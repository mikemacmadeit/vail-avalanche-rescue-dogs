# ONE DRIVE IS DELETING YOUR NODE_MODULES

## You MUST fix this or the project will never work:

### Option 1: Exclude node_modules from OneDrive (RECOMMENDED)

1. Open **File Explorer**
2. Navigate to: `C:\Users\micha\OneDrive\Documents\Vail Avalanche Rescue Dogs\project`
3. Right-click the `node_modules` folder
4. Click **Properties**
5. Go to the **General** tab
6. Click **Advanced**
7. Check **"File is ready for archiving"** and uncheck **"Always keep on this device"**
8. OR: Go to OneDrive Settings → Sync and backup → Advanced settings → Choose folders to sync → Uncheck this project folder

### Option 2: Move Project Outside OneDrive (BEST SOLUTION)

1. Create folder: `C:\Projects`
2. Move entire project: `C:\Users\micha\OneDrive\Documents\Vail Avalanche Rescue Dogs` → `C:\Projects\Vail Avalanche Rescue Dogs`
3. Open project from new location

### Option 3: Use the start-dev.ps1 script

Run `.\start-dev.ps1` in PowerShell - it will reinstall packages quickly before OneDrive deletes them.

**THE PROJECT WILL NOT WORK UNTIL YOU FIX ONEDRIVE SYNCING**



