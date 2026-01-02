# 🚨 ONE DRIVE FIX REQUIRED 🚨

## The Problem
OneDrive is deleting your `node_modules` folder, which breaks the development server.

## The Solution (Choose ONE):

### Option 1: Exclude node_modules from OneDrive Sync (RECOMMENDED)
1. Open File Explorer
2. Navigate to: `C:\Users\micha\OneDrive\Documents\Vail Avalanche Rescue Dogs\project`
3. **Right-click** on the `node_modules` folder
4. Select **"Always keep on this device"**
5. Run: `.\fix-onedrive.ps1`

### Option 2: Move Project Outside OneDrive (BEST)
1. Move entire project folder to: `C:\Projects\Vail Avalanche Rescue Dogs`
2. Open new location in terminal
3. Run: `npm install`
4. Run: `npm run dev`

### Option 3: Use Keep-Alive Script (TEMPORARY WORKAROUND)
Run: `.\keep-alive.ps1`
- This will continuously reinstall packages if OneDrive deletes them
- **Not ideal** - but will keep dev server running
- You still need to fix OneDrive eventually

## Quick Start (After Fixing OneDrive)
```powershell
.\fix-onedrive.ps1
```

Or simply:
```powershell
npm install
npm run dev
```


