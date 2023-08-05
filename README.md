# Guide to Using Hash Studios Patron Sync

### How the GitHub Repository and its Linking Mechanism Works with the [HS] Tags:

**Step 1:** **The GitHub Repository Structure**

The repository contains an `index.html` file. When located in the root or a designated 'docs' folder of the repository, this file can be utilized to create a GitHub Pages website, making its content accessible as a standard web page.

**Step 2:** **GitHub Pages Activation**

Using GitHub Pages, the files from a GitHub repository are converted into a static website. The link, `https://lin8x.github.io/VRCDownloadString/`, serves as the GitHub Pages URL for the repository and will display the `index.html` content.

**Step 3:** **Using the [HS] Tags in `index.html`**

Within the `index.html` file, a specific tagging system is used to denote the list of VIP/Patron players. The tags `[HS]` and `[/HS]` encapsulate the player data, signifying the start and end of the player list respectively. 

Inside these tags, each player's name is separated by a comma. For instance, it could look something like: `[HS]player1, player2, player3[/HS]`.

**Step 4:** **VRChat's Integration with Hash Studios Patron Sync**

With VRChat's Udon scripting and the Hash Studios Patron tool, scripts can be embedded to fetch web resources. A script in VRChat sends a request to the GitHub Pages URL, fetches the content of the `index.html` file, and then scans for the `[HS]` and `[/HS]` tags. Upon locating these tags, the script extracts the list of players encapsulated within them.

**Step 5:** **Processing the Player Data**

Once the data between the `[HS]` and `[/HS]` tags is fetched, the script can parse each player's information. The comma-separated list is split to identify individual player names. With this data in hand, VRChat can offer customized experiences, granting players their respective VIP or Patron statuses and associated privileges.

### Conclusion:

This setup, which involves using GitHub and GitHub Pages as a hosting platform, combined with specific tagging in the `index.html` file, provides a clear structure for storing and serving player data. The comma separation within the `[HS]` tags ensures that each player's name is distinct and easily parsable. When integrated into VRChat using the right scripting tools, developers can create an immersive, personalized virtual experience based on this data.
