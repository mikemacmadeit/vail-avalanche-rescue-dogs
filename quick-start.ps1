# Quick start script that installs and immediately runs dev server
Set-Location -Path $PSScriptRoot

Write-Host "Installing packages..." -ForegroundColor Yellow
$env:npm_config_cache = "C:\temp\npm-cache"
npm install --prefer-offline --no-audit --no-fund --loglevel=error 2>&1 | Out-Null

# Immediately check and start
if (Test-Path "node_modules\@vitejs\plugin-react\dist\index.js") {
    Write-Host "Packages installed successfully!" -ForegroundColor Green
    Remove-Item -Recurse -Force node_modules\.vite-temp -ErrorAction SilentlyContinue
    Write-Host "Starting dev server..." -ForegroundColor Yellow
    npm run dev
} else {
    Write-Host "ERROR: Packages were deleted by OneDrive!" -ForegroundColor Red
    Write-Host "You MUST exclude node_modules from OneDrive sync or move project outside OneDrive" -ForegroundColor Red
    Write-Host ""
    Write-Host "Quick fix: Right-click 'node_modules' folder -> Always keep on this device" -ForegroundColor Yellow
    pause
}


