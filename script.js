let rankCounter = 1;

function addRank() {
    if(rankCounter >= 10) {
        alert("You can only add up to 10 ranks.");
        return;
    }

    rankCounter++;
    const rankDiv = document.createElement('div');
    rankDiv.className = 'rank';
    rankDiv.id = `rankContainer${rankCounter}`;

    const rankLabelSpan = document.createElement('span');
    rankLabelSpan.className = 'rankLabel';
    rankLabelSpan.innerText = `Rank ${rankCounter}:`;

    const rankNameLabel = document.createElement('label');
    rankNameLabel.setAttribute('for', `rank${rankCounter}_name`);
    rankNameLabel.innerText = `Name: `;

    const rankNameInput = document.createElement('input');
    rankNameInput.type = 'text';
    rankNameInput.id = `rank${rankCounter}_name`;
    rankNameInput.placeholder = "e.g. VIP";
    rankNameInput.style.marginRight = "20px";

    const rankLabel = document.createElement('label');
    rankLabel.setAttribute('for', `rank${rankCounter}`);
    rankLabel.innerText = `Player Usernames (comma separated): `;

    const rankInput = document.createElement('input');
    rankInput.type = 'text';
    rankInput.id = `rank${rankCounter}`;
    rankInput.placeholder = "e.g. John,Jane";

    // Create color label and input
    const colorLabel = document.createElement('label');
    colorLabel.setAttribute('for', `rank${rankCounter}_color`);
    colorLabel.innerText = 'Color: ';
    colorLabel.style.marginLeft = '20px';

    const colorInput = document.createElement('input');
    colorInput.type = 'color';
    colorInput.id = `rank${rankCounter}_color`;

    // Appending elements to rankDiv
    rankDiv.appendChild(rankLabelSpan);
    rankDiv.appendChild(rankNameLabel);
    rankDiv.appendChild(rankNameInput);
    rankDiv.appendChild(rankLabel);
    rankDiv.appendChild(rankInput);
    rankDiv.appendChild(colorLabel); // Append color label
    rankDiv.appendChild(colorInput); // Append color input

    document.getElementById('ranksContainer').appendChild(rankDiv);
}

function removeRank() {
    if(rankCounter == 1) {
        alert("You can't remove the first rank.");
        return;
    }
    
    const lastRank = document.getElementById(`rankContainer${rankCounter}`);
    if (lastRank) {
        lastRank.remove();
        rankCounter--;
    }
}

function generateInput() {
    let inputStr = "";

    for(let i = 1; i <= rankCounter; i++) {
        const rankName = document.getElementById(`rank${i}_name`).value || 'NAME NOT GIVEN';
        const players = document.getElementById(`rank${i}`).value;
        const color = document.getElementById(`rank${i}_color`).value.slice(1); // Note the ID change here

        inputStr += `[Rank${i}_Name]${rankName}[/Rank${i}_Name] `;
        inputStr += `[Rank${i}]${players}[/Rank${i}] `;
        inputStr += `[Rank${i}_Color]#${color}[/Rank${i}_Color]`; // Add the color to the string

        // If it's not the last rank, add two new lines for spacing
        if (i < rankCounter) {
            inputStr += "\n\n";
        }
    }

    document.getElementById('generatedInput').value = inputStr.trim();
}

function copyToClipboard() {
    var textarea = document.getElementById("generatedInput");
    textarea.select(); 
    document.execCommand("copy");
    alert("Copied to clipboard!");
}
