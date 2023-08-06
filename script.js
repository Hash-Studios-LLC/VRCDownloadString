let rankCounter = 1;

function addRank() {
    if(rankCounter >= 10) {
        alert("You can only add up to 10 ranks.");
        return;
    }

    rankCounter++;
    const rankDiv = document.createElement('div');
    rankDiv.className = 'rank';

    const rankNameLabel = document.createElement('label');
    rankNameLabel.setAttribute('for', `rank${rankCounter}_name`);
    rankNameLabel.innerText = `Rank ${rankCounter} Name: `;

    const rankNameInput = document.createElement('input');
    rankNameInput.type = 'text';
    rankNameInput.id = `rank${rankCounter}_name`;
    rankNameInput.placeholder = "e.g. Warriors";

    const rankLabel = document.createElement('label');
    rankLabel.setAttribute('for', `rank${rankCounter}`);
    rankLabel.innerText = `Rank ${rankCounter} Player Usernames (comma separated): `;

    const rankInput = document.createElement('input');
    rankInput.type = 'text';
    rankInput.id = `rank${rankCounter}`;
    rankInput.placeholder = "e.g. John, Jane";

    rankDiv.appendChild(rankNameLabel);
    rankDiv.appendChild(rankNameInput);
    rankDiv.appendChild(rankLabel);
    rankDiv.appendChild(rankInput);

    document.getElementById('ranksContainer').appendChild(rankDiv);
}

function generateInput() {
    let inputStr = "";

    for(let i = 1; i <= rankCounter; i++) {
        const rankName = document.getElementById(`rank${i}_name`).value;
        const players = document.getElementById(`rank${i}`).value;

        inputStr += `[Rank${i}_Name]${rankName}[/Rank${i}_Name] `;
        inputStr += `[Rank${i}]${players}[/Rank${i}] `;
    }

    document.getElementById('generatedInput').value = inputStr.trim();
}
