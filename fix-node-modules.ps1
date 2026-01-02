# Fix node_modules by installing to safe location and creating junction
# This bypasses OneDrive deleting the files

$safePath = "C:\temp\VailRescueDogs\node_modules"
$projectPath = "C:\Users\micha\OneDrive\Documents\Vail Avalanche Rescue Dogs\project"

Write-Host "Setting up safe node_modules location..." -ForegroundColor Yellow

# Create safe directory
New-Item -ItemType Directory -Force -Path (Split-Path $safePath) | Out-Null

# Remove old junction if exists
if (Test-Path "$projectPath\node_modules") {
    $item = Get-Item "$projectPath\node_modules"
    if ($item.LinkType -eq "Junction") {
        cmd /c "rmdir /q `"$projectPath\node_modules`"" 2>&1 | Out-Null
    } else {
        Remove-Item -Recurse -Force "$projectPath\node_modules" -ErrorAction SilentlyContinue
    }
}

# Install packages to safe location
Write-Host "Installing packages to safe location..." -ForegroundColor Yellow
Set-Location (Split-Path $safePath)
Copy-Item "$projectPath\package.json" . -Force
npm install --no-audit --no-fund 2>&1 | Out-Null

# Manually extract critical packages if npm fails
Write-Host "Ensuring critical packages are installed..." -ForegroundColor Yellow
if (-not (Test-Path "$safePath\@vitejs\plugin-react\dist\index.js")) {
    npm pack @vitejs/plugin-react@5.1.2 2>&1 | Out-Null
    npm pack @rolldown/pluginutils@1.0.0-beta.53 2>&1 | Out-Null
    New-Item -ItemType Directory -Force -Path "$safePath\@vitejs\plugin-react" | Out-Null
    New-Item -ItemType Directory -Force -Path "$safePath\@rolldown\pluginutils" | Out-Null
    tar -xzf vitejs-plugin-react-5.1.2.tgz -C "$safePath\@vitejs\plugin-react" --strip-components=1 2>&1 | Out-Null
    tar -xzf rolldown-pluginutils-1.0.0-beta.53.tgz -C "$safePath\@rolldown\pluginutils" --strip-components=1 2>&1 | Out-Null
    Remove-Item *.tgz -ErrorAction SilentlyContinue
}

# Create junction
Write-Host "Creating junction link..." -ForegroundColor Yellow
Set-Location $projectPath
cmd /c "mklink /J node_modules `"$safePath`"" 2>&1 | Out-Null

Write-Host "Done! node_modules is now linked to safe location." -ForegroundColor Green
Write-Host "You can now run: npm run dev" -ForegroundColor Green



