# Public Uptime Pinger 🚀

A simple, free, and serverless service to keep your web projects alive on platforms like Render, Heroku, etc., preventing them from sleeping due to inactivity.

This service runs on a schedule using GitHub Actions, so you can "set it and forget it."

## How to Use

Setting this up takes less than 2 minutes.

**1. Fork this Repository**

Click the **"Fork"** button at the top-right of this page to create a copy of this repository on your own GitHub account.

**2. Edit the `sites.json` File**

In your newly forked repository, navigate to the `sites.json` file. Click the pencil icon to edit it and replace the example URLs with your own.

```json
{
  "sites": [
    "https://your-first-app.onrender.com",
    "https://your-second-app.onrender.com"
  ]
}