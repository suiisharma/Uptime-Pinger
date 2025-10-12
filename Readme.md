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
    "https://my-awesome-portfolio.onrender.com",
    "https://my-cool-api.onrender.com/health-check",
    "https://another-project.herokuapp.com"
  ]
}
```

After adding your URLs, scroll down and click the green "Commit changes..." button.

**3. Enable and Run the Workflow**

GitHub Actions are disabled on forks by default for security. You need to enable them and run the workflow once to confirm your setup.

Go to the "Actions" tab of your repository.

Click the big green button that says "I understand my workflows, go ahead and enable them."

Enable Actions

After enabling, stay on the Actions page. In the left sidebar, click on the workflow named "Keep Sites Awake".

Click the "Run workflow" dropdown button that appears on the right, then click the green "Run workflow" button inside it.

**4. Verify It's Working**

A new workflow run will appear in the list. Click on its title to see the details. Then, click on the ping job.

You should see logs with a ✅ SUCCESS message for each of your URLs.

That's it! Your uptime pinger is now active and will run automatically every 14 minutes to keep your sites online.
