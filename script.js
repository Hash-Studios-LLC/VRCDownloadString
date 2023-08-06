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

    rankDiv.appendChild(rankLabelSpan);
    rankDiv.appendChild(rankNameLabel);
    rankDiv.appendChild(rankNameInput);
    rankDiv.appendChild(rankLabel);
    rankDiv.appendChild(rankInput);

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
    let output = "";

    for (let i = 1; i <= rankCounter; i++) {
        let rankName = document.getElementById("rankName" + i).value;
        let players = document.getElementById("rank" + i).value;

        output += `[Rank${i}_Name]${rankName ? rankName : "NAME NOT GIVEN"}[/Rank${i}_Name]\n`;
        output += `[Rank${i}]${players}[/Rank${i}]`;

        // If it's not the last rank, add two new lines for spacing
        if (i < rankCounter) {
            output += "\n\n\n";
        }
    }

    document.getElementById("generatedInput").value = output;
}

function copyToClipboard() {
    var textarea = document.getElementById("generatedInput");
    textarea.select(); 
    document.execCommand("copy");
    alert("Copied to clipboard!");
}
