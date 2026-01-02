# Fix for npm install issue

## The Problem
npm install wasn't installing devDependencies even though it said "up to date". This is why `@vitejs/plugin-react` and `vite` were missing.

## The Solution
Use `npm install --include=dev` instead of just `npm install`:

```powershell
cd project
npm install --include=dev
npm run dev
```

## Why This Happened
This is unusual - normally `npm install` should install both dependencies and devDependencies. It's possible there's a workspace configuration or npm setting causing this, but using `--include=dev` explicitly ensures devDependencies are installed.

## Quick Start Script
I've created `fix-and-start.ps1` that will automatically fix missing packages and start the server:

```powershell
cd project
.\fix-and-start.ps1
```


