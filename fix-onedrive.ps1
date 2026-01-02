# Comprehensive fix for OneDrive interference
Set-Location -Path $PSScriptRoot

Write-Host "=== OneDrive Fix Script ===" -ForegroundColor Cyan
Write-Host ""

# Step 1: Install packages
Write-Host "[1/3] Installing npm packages..." -ForegroundColor Yellow
$env:npm_config_cache = "C:\temp\npm-cache"
npm install --no-audit --no-fund --loglevel=error 2>&1 | Out-Null

Start-Sleep -Milliseconds 1000

# Step 2: Immediately protect the folder
if (Test-Path "node_modules") {
    Write-Host "[2/3] Protecting node_modules from OneDrive..." -ForegroundColor Yellow
    $nodeModulesPath = (Resolve-Path "node_modules").Path
    
    # Try multiple methods to protect the folder
    try {
        # Method 1: Set folder attributes
        $folder = Get-Item "node_modules"
        $folder.Attributes = $folder.Attributes -bor [System.IO.FileAttributes]::ReadOnly
        $folder.Attributes = $folder.Attributes -bor [System.IO.FileAttributes]::System
        
        # Method 2: Use OneDrive API to set offline
        $shell = New-Object -ComObject Shell.Application
        $parentFolder = $shell.NameSpace((Split-Path $nodeModulesPath))
        $item = $parentFolder.ParseName("node_modules")
        if ($item) {
            $item.InvokeVerb("alwaysavailableoffline")
        }
    } catch {
        Write-Host "Warning: Could not set all protection attributes" -ForegroundColor Yellow
    }
}

# Step 3: Verify and start
Start-Sleep -Milliseconds 500
if (Test-Path "node_modules\@vitejs\plugin-react\dist\index.js") {
    Write-Host "[3/3] Packages verified! Starting dev server..." -ForegroundColor Green
    Remove-Item -Recurse -Force node_modules\.vite-temp -ErrorAction SilentlyContinue
    npm run dev
} else {
    Write-Host ""
    Write-Host "ERROR: Packages were deleted by OneDrive!" -ForegroundColor Red
    Write-Host ""
    Write-Host "PERMANENT FIX REQUIRED:" -ForegroundColor Yellow
    Write-Host "1. Right-click 'node_modules' folder" -ForegroundColor White
    Write-Host "2. Select 'Always keep on this device'" -ForegroundColor White
    Write-Host "OR" -ForegroundColor White
    Write-Host "1. Right-click OneDrive icon in system tray" -ForegroundColor White
    Write-Host "2. Settings > Sync and backup > Advanced settings" -ForegroundColor White
    Write-Host "3. Exclude this project folder from sync" -ForegroundColor White
    Write-Host ""
    Write-Host "Then run this script again: .\fix-onedrive.ps1" -ForegroundColor Cyan
    pause
}


