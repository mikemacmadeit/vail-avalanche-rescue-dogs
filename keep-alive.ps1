# Keep-alive script that continuously monitors and reinstalls packages if OneDrive deletes them
Set-Location -Path $PSScriptRoot

Write-Host "=== Keep-Alive Mode ===" -ForegroundColor Cyan
Write-Host "This script will continuously monitor packages and reinstall if OneDrive deletes them" -ForegroundColor Yellow
Write-Host "Press Ctrl+C to stop" -ForegroundColor Yellow
Write-Host ""

$checkInterval = 3 # seconds
$maxAttempts = 10
$attempt = 0

function Install-And-Start {
    Write-Host "[$(Get-Date -Format 'HH:mm:ss')] Installing packages..." -ForegroundColor Yellow
    $env:npm_config_cache = "C:\temp\npm-cache"
    npm install --prefer-offline --no-audit --no-fund --loglevel=error 2>&1 | Out-Null
    
    Start-Sleep -Milliseconds 500
    
    if (Test-Path "node_modules\@vitejs\plugin-react\dist\index.js") {
        Write-Host "[$(Get-Date -Format 'HH:mm:ss')] Packages installed!" -ForegroundColor Green
        
        # Try to protect folder
        try {
            $folder = Get-Item "node_modules" -ErrorAction SilentlyContinue
            if ($folder) {
                $shell = New-Object -ComObject Shell.Application
                $parentFolder = $shell.NameSpace((Split-Path $folder.FullName))
                $item = $parentFolder.ParseName("node_modules")
                if ($item) { $item.InvokeVerb("alwaysavailableoffline") | Out-Null }
            }
        } catch { }
        
        return $true
    }
    return $false
}

# Initial install
if (-not (Install-And-Start)) {
    Write-Host "Initial installation failed. OneDrive is interfering." -ForegroundColor Red
    Write-Host "You MUST exclude node_modules from OneDrive sync!" -ForegroundColor Red
    pause
    exit
}

# Start dev server in background
Write-Host "[$(Get-Date -Format 'HH:mm:ss')] Starting dev server..." -ForegroundColor Yellow
Remove-Item -Recurse -Force node_modules\.vite-temp -ErrorAction SilentlyContinue
$devServer = Start-Process -FilePath "npm" -ArgumentList "run","dev" -PassThru -NoNewWindow

Write-Host "[$(Get-Date -Format 'HH:mm:ss')] Dev server started (PID: $($devServer.Id))" -ForegroundColor Green
Write-Host "Monitoring packages every $checkInterval seconds..." -ForegroundColor Cyan
Write-Host ""

# Monitor loop
while ($true) {
    Start-Sleep -Seconds $checkInterval
    
    if (-not (Test-Path "node_modules\@vitejs\plugin-react\dist\index.js")) {
        $attempt++
        Write-Host "[$(Get-Date -Format 'HH:mm:ss')] WARNING: Packages deleted by OneDrive! (Attempt $attempt/$maxAttempts)" -ForegroundColor Red
        
        if ($attempt -ge $maxAttempts) {
            Write-Host "Max attempts reached. OneDrive is too aggressive." -ForegroundColor Red
            Write-Host "You MUST exclude node_modules from OneDrive sync!" -ForegroundColor Red
            Stop-Process -Id $devServer.Id -ErrorAction SilentlyContinue
            pause
            exit
        }
        
        # Kill dev server
        Stop-Process -Id $devServer.Id -ErrorAction SilentlyContinue
        Start-Sleep -Seconds 1
        
        # Reinstall
        if (Install-And-Start) {
            $attempt = 0
            Write-Host "[$(Get-Date -Format 'HH:mm:ss')] Restarting dev server..." -ForegroundColor Yellow
            Remove-Item -Recurse -Force node_modules\.vite-temp -ErrorAction SilentlyContinue
            $devServer = Start-Process -FilePath "npm" -ArgumentList "run","dev" -PassThru -NoNewWindow
            Write-Host "[$(Get-Date -Format 'HH:mm:ss')] Dev server restarted!" -ForegroundColor Green
        }
    }
    
    # Check if dev server is still running
    if ($devServer.HasExited) {
        Write-Host "[$(Get-Date -Format 'HH:mm:ss')] Dev server stopped. Restarting..." -ForegroundColor Yellow
        Remove-Item -Recurse -Force node_modules\.vite-temp -ErrorAction SilentlyContinue
        $devServer = Start-Process -FilePath "npm" -ArgumentList "run","dev" -PassThru -NoNewWindow
    }
}


