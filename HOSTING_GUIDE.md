# Hosting on Netlify

You can host your website for free on Netlify. There are two main ways to do this:

## Method 1: Drag & Drop (Easiest)
This method is perfect for getting your site online quickly without installing anything.

1.  **Prepare your folder**: Make sure your `Website` folder contains `index.html`, `css/`, `js/`, and `assets/`.
2.  **Go to Netlify Drop**: Open [https://app.netlify.com/drop](https://app.netlify.com/drop) in your browser.
3.  **Drag and Drop**: Drag your **entire `Website` folder** onto the designated area on the page.
4.  **Wait for Upload**: Netlify will upload and deploy your site in a few seconds.
5.  **Done!** You will get a live URL (e.g., `amazing-site-12345.netlify.app`). You can change this site name in "Site Settings".

### How to cleanup/update content later?
To update your site (e.g., change text, add a project):
1.  Edit the files on your computer.
2.  Go to your site dashboard on Netlify.
3.  Go to **Deploys**.
4.  Drag your **updated `Website` folder** again onto the designated drop zone.
5.  The site will update instantly.

---

## Method 2: Connect to GitHub (Recommended for Long Term)
If you use GitHub, this is the better way because the site updates automatically when you push code.

1.  **Push to GitHub**: Create a repository on GitHub and push your code there.
2.  **New Site from Git**: Log in to Netlify and select "New site from Git".
3.  **Select Repository**: Choose your `Website` repository.
4.  **Deploy**: Click "Deploy Site".
5.  **Updates**: Now, whenever you change code and push to GitHub, Netlify updates your site automatically!
