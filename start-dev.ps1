# Quick start script - run this instead of npm run dev
# This reinstalls packages and starts the server quickly

Write-Host "Installing dependencies..." -ForegroundColor Yellow
npm install --prefer-offline --no-audit --no-fund --silent

Write-Host "Clearing Vite cache..." -ForegroundColor Yellow
Remove-Item -Recurse -Force node_modules\.vite-temp -ErrorAction SilentlyContinue

Write-Host "Starting dev server..." -ForegroundColor Green
npm run dev



