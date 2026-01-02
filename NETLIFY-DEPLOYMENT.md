# Netlify Deployment Guide

Your code is now on GitHub! Here's how to set up automatic deployment to Netlify:

## Repository Information
- **GitHub Repository**: https://github.com/mikemacmadeit/vail-avalanche-rescue-dogs
- **Build Command**: `npm run build`
- **Publish Directory**: `dist`

## Step-by-Step Netlify Setup

### 1. Sign in to Netlify
- Go to https://app.netlify.com
- Sign in with your Netlify account (or create one if you don't have one)

### 2. Connect GitHub (if not already connected)
- In Netlify, go to **Site configuration** → **Build & deploy** → **Continuous Deployment**
- Click **Link to Git provider**
- Select **GitHub**
- Authorize Netlify to access your GitHub account
- Grant access to the repositories you want to deploy (or all repositories)

### 3. Add New Site from Git
- Click **Add new site** → **Import an existing project**
- Select **GitHub** as your Git provider
- Find and select the repository: `vail-avalanche-rescue-dogs`
- Click **Import**

### 4. Configure Build Settings
Netlify should auto-detect these settings, but verify:

- **Base directory**: (leave empty)
- **Build command**: `npm run build`
- **Publish directory**: `dist`
- **Branch to deploy**: `master` (or `main` if you rename it later)

### 5. Deploy
- Click **Deploy site**
- Netlify will:
  1. Install dependencies (`npm install`)
  2. Run the build command (`npm run build`)
  3. Deploy the `dist` folder to their CDN

### 6. Configure Environment Variables (if needed)
If your app needs any environment variables:
- Go to **Site settings** → **Environment variables**
- Add any required variables (e.g., API keys)

### 7. Custom Domain (Optional)
- Go to **Site settings** → **Domain management**
- Click **Add custom domain**
- Follow the instructions to configure your domain

## Auto-Deployment

Once set up, Netlify will automatically:
- Deploy when you push to the `master` branch
- Create preview deployments for pull requests
- Show deployment status in GitHub

## Next Steps

After the initial deployment:
1. Your site will be live at a URL like: `https://random-name-12345.netlify.app`
2. You can customize the site name in Netlify settings
3. Every time you push to GitHub, Netlify will automatically rebuild and deploy

## Troubleshooting

If the build fails:
- Check the build logs in Netlify
- Ensure `package.json` has the correct build script
- Verify Node.js version (Netlify uses Node 18 by default, but you can specify a version in `.nvmrc` or `netlify.toml`)

## Manual Deploy (Alternative)

If you prefer to deploy manually:
1. Run `npm run build` locally
2. Drag and drop the `dist` folder to Netlify's deploy area
3. Note: Manual deploys won't auto-update when you push to GitHub

