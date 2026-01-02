# Fix missing packages and start dev server
Write-Host "Checking and fixing missing packages..." -ForegroundColor Cyan

$projectRoot = Split-Path -Parent $PSScriptRoot
cd "$projectRoot\project"

# Function to extract package
function Extract-Package {
    param($packageName, $targetPath)
    
    if (Test-Path $targetPath) {
        return $true
    }
    
    Write-Host "Extracting $packageName..." -ForegroundColor Yellow
    npm pack $packageName 2>&1 | Out-Null
    
    $tgz = Get-ChildItem -Filter "$packageName*.tgz" | Select-Object -First 1
    if ($tgz) {
        New-Item -ItemType Directory -Force -Path $targetPath | Out-Null
        tar -xzf $tgz.Name -C $targetPath --strip-components=1 2>&1 | Out-Null
        Remove-Item $tgz.FullName -ErrorAction SilentlyContinue
        return $true
    }
    return $false
}

# Ensure node_modules exists
if (-not (Test-Path "node_modules")) {
    Write-Host "Installing dependencies..." -ForegroundColor Yellow
    npm install 2>&1 | Out-Null
}

# Fix @vitejs/plugin-react
if (-not (Test-Path "node_modules\@vitejs\plugin-react\dist\index.js")) {
    Extract-Package "@vitejs/plugin-react" "node_modules\@vitejs\plugin-react"
}

# Fix vite
if (-not (Test-Path "node_modules\vite\dist\node\index.js")) {
    Extract-Package "vite" "node_modules\vite"
}

# Install other dependencies
npm install @rolldown/pluginutils react-refresh --save-dev 2>&1 | Out-Null

Write-Host "`nStarting dev server..." -ForegroundColor Green
npm run dev


