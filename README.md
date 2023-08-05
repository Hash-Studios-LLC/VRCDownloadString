<img src="https://github.com/Lin8x/VRCDownloadString/blob/main/Images/HashStudiosBlue.png" width="100%" height="5">

# <p align="center"> &nbsp; Guide to Using Hash Studios Patron Sync &nbsp; </p>

<br>

<br>
<p align="center">
  <img src="https://github.com/Lin8x/VRCDownloadString/blob/main/Images/HashStudiosPatronSyncBanner.png" width="600" hspace="20"/>
</p>
<br>

<br><img src="https://github.com/Lin8x/VRCDownloadString/blob/main/Images/HashStudiosBlue.png" width="100%" height="5"><br><br>

**1. Set Up a GitHub Account:** 

- If you don’t have a GitHub account, sign up at [github.com](https://github.com/).

<br><img src="https://github.com/Lin8x/VRCDownloadString/blob/main/Images/HashStudiosBlue.png" width="100%" height="5"><br><br>

**2. Create a New Repository:**
   
- Once logged in, click on the '+' icon in the top right corner and select 'New repository'.
- Name the repository appropriately.
- Add a description (optional) and choose public visibility to ensure the GitHub Pages website will be publicly accessible.

<br><img src="https://github.com/Lin8x/VRCDownloadString/blob/main/Images/HashStudiosBlue.png" width="100%" height="5"><br><br>

**3. Adding Content with the [HS] Tags:**

- Create or upload an `index.html` file in the root of the repository.
- Within the `index.html` file, use the `[HS]` and `[/HS]` tags to encapsulate the list of VIP/Patron players.
- Inside these tags, list each player's name separated by a comma, like this: <br> `[HS]player1,player2,player3[/HS]`.
- Make sure to not include spaces unless necessary.

<br><img src="https://github.com/Lin8x/VRCDownloadString/blob/main/Images/HashStudiosBlue.png" width="100%" height="5"><br><br>

**4. Configure GitHub Pages:**

- Go to the 'Settings' tab of your repository.
- Scroll down to the 'GitHub Pages' section.
- In the 'Source' drop-down, select the branch you want to use (usually `main` or `master`).

<br><img src="https://github.com/Lin8x/VRCDownloadString/blob/main/Images/HashStudiosBlue.png" width="100%" height="5"><br><br>

**5. Custom URL:**

- GitHub Pages will provide a default URL like `username.github.io/repositoryName`.
- To use a custom domain, add it in the 'Custom domain' section under 'GitHub Pages' in settings.

<br><img src="https://github.com/Lin8x/VRCDownloadString/blob/main/Images/HashStudiosBlue.png" width="100%" height="5"><br><br>

**6. Access Your Site & Verify:**

- Visit the GitHub Pages URL to view your site and ensure the `[HS]` tags and player list appear as expected.

<br><img src="https://github.com/Lin8x/VRCDownloadString/blob/main/Images/HashStudiosBlue.png" width="100%" height="5"><br><br>

**7. Integration with Hash Studios Patron Sync:**

- Purchase the Hash Studios Patron Sync prefab at [Hash Studios LLC's Website](https://hashstudiosllc.com/hashstudiospatronsync).
- Within VRChat, find the Hash Studios Patron Sync prefab and enter your GitHub Pages URL (e.g., `username.github.io/repositoryName`) where it asks for the website link. This will ensure the prefab fetches the VIP/Patron list from your GitHub Page.
- The prefab will handle the extraction of player names from the `[HS]` tags and process the comma-separated list, granting the corresponding VIP or Patron status within VRChat.

<br><img src="https://github.com/Lin8x/VRCDownloadString/blob/main/Images/HashStudiosBlue.png" width="100%" height="5"><br><br>

**8. Updating and Reflecting Changes:**

- You can update the `index.html` file in your repository at any time, either directly through the GitHub interface or by pushing changes from your local machine.
- Once you commit and push these changes, they will be automatically reflected on your GitHub Pages website.
- The next time a VRChat instance with the Hash Studios Patron Sync prefab linked to your website is launched, it will automatically pull the updated list of VIPs/Patrons from the modified `index.html` file. This ensures real-time syncing of your patron list with the VR experience.

<br><img src="https://github.com/Lin8x/VRCDownloadString/blob/main/Images/HashStudiosBlue.png" width="100%" height="5"><br><br>
