# Simple dev server starter
Set-Location -Path $PSScriptRoot

Write-Host "Installing packages..." -ForegroundColor Yellow
npm install --no-audit --no-fund 2>&1 | Out-Null

if (Test-Path "node_modules\@vitejs\plugin-react\dist\index.js") {
    Write-Host "Starting dev server..." -ForegroundColor Green
    Remove-Item -Recurse -Force node_modules\.vite-temp -ErrorAction SilentlyContinue
    npm run dev
} else {
    Write-Host ""
    Write-Host "ERROR: Packages not found!" -ForegroundColor Red
    Write-Host ""
    Write-Host "OneDrive is deleting node_modules. You MUST:" -ForegroundColor Yellow
    Write-Host "1. Right-click 'node_modules' folder" -ForegroundColor White
    Write-Host "2. Select 'Always keep on this device'" -ForegroundColor White
    Write-Host ""
    Write-Host "Then run this script again." -ForegroundColor Cyan
    pause
}


