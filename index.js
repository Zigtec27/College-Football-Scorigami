let currentPopup = null; // Track the currently open popup

// Function to hide the currently visible popup
function hideCurrentPopup() {
    if (currentPopup) {
        currentPopup.style.display = 'none';
        currentPopup = null; // Clear the current popup reference
    }
}

// Add event listeners to each PastScorigami or Scorigami cell
document.querySelectorAll('.PastScorigami, .Scorigami').forEach(scorigamiElement => {
    const popupId = scorigamiElement.getAttribute('data-popup');
    const popup = document.getElementById(popupId);

    if (popup) {
        // Show the popup and hide the previously shown popup
        scorigamiElement.addEventListener('click', function(event) {
            // Hide the currently visible popup if there is one
            hideCurrentPopup();

            // Get the bounding box of the clicked trigger
            const rect = scorigamiElement.getBoundingClientRect();
            if (popup.id === "222-0_popup") {
                popup.style.top = `${20}px`; // Adjust 20px above the element
                popup.style.left = `${2754}px`; // Move to the specified position
            }
            if (popup.id === "71-68_popup") {
                popup.style.top = `${831}px`; // Adjust 20px above the element
                popup.style.left = `${936}px`; // Move to the specified position
            }
            if (popup.id === "74-72_popup") {
                popup.style.top = `${883}px`; // Adjust 20px above the element
                popup.style.left = `${975}px`; // Move to the specified position
            }
            // Show the new popup
            popup.style.display = 'block';

            // Update the currentPopup to the newly shown popup
            currentPopup = popup;

            // Stop propagation to prevent the click event from closing the popup immediately
            event.stopPropagation();
        });

        // Close the popup when the close button is clicked
        const closeBtn = popup.querySelector('.close-btn');
        if (closeBtn) {
            closeBtn.addEventListener('click', function(event) {
                popup.style.display = 'none';
                // Clear the current popup when closed
                if (currentPopup === popup) {
                    currentPopup = null;
                }
                event.stopPropagation(); // Prevent the event from bubbling up
            });
        }
    }
});

// Close the popup when clicking outside
document.addEventListener('click', function(event) {
    // Check if the click was outside the current popup
    if (currentPopup && !currentPopup.contains(event.target) && !event.target.closest('.PastScorigami, .Scorigami')) {
        hideCurrentPopup();
    }
});

document.querySelectorAll('.ScoreTable td').forEach(cell => {
    cell.addEventListener('mouseenter', function () {
        const table = document.querySelector('.ScoreTable');
        const cellIndex = this.cellIndex; // Get the column index of the hovered cell
        
        // Find the corresponding header cell in the top row
        const headerCell = table.querySelector(`tr.row_-1 th:nth-child(${cellIndex + 1})`);
        
        if (headerCell) {
            headerCell.classList.add('ColumnHeaderHover'); // Add highlight class
        }
    });

    cell.addEventListener('mouseleave', function () {
        const table = document.querySelector('.ScoreTable');
        const cellIndex = this.cellIndex; // Get the column index of the hovered cell
        
        // Find the corresponding header cell in the top row
        const headerCell = table.querySelector(`tr.row_-1 th:nth-child(${cellIndex + 1})`);
        
        if (headerCell) {
            headerCell.classList.remove('ColumnHeaderHover'); // Remove highlight class
        }
    });
});


async function loadData() {
  const [scoreIndexResp, finalIndexResp, gamesResp] = await Promise.all([
    fetch("score_index.json"),
    fetch("final_index.json"),
    fetch("games.json")
  ]);
  return {
    scoreIndex: await scoreIndexResp.json(),
    finalIndex: await finalIndexResp.json(),
    games: await gamesResp.json()
  };
}

function formatGame(game, boxUrl) {
  const winnerRank = game.winner.rank ? `(${game.winner.rank})` : "";
  const loserRank = game.loser.rank ? `(${game.loser.rank})` : "";

  let vs = "vs.";
  if (game.location === "@") vs = "@";
  if (game.location === "N") vs = "(N)";

  // Parse the date as local time, avoid UTC shift
  const [year, month, day] = game.date.split("-").map(Number);
  const dateObj = new Date(year, month - 1, day);

  const options = { weekday: "short", year: "numeric", month: "long", day: "numeric" };
  const prettyDate = dateObj.toLocaleDateString("en-US", options);

  return `<b>${winnerRank}${game.winner.name} ${game.winScore}</b> ${vs} ${game.loseScore} ${loserRank}${game.loser.name} | Week ${game.week}: ${prettyDate} <a href="${boxUrl}" target=_blank>(Boxscore)</a>`;
}

async function populatePopups() {
  const { scoreIndex, finalIndex, games } = await loadData();

  Object.entries(scoreIndex).forEach(([scoreKey, refs]) => {
    const firstGame = games[refs.first.id];
    const lastGame = games[refs.last.id];
    const freq = finalIndex[scoreKey]?.length || 0;

    if (!firstGame || !lastGame) return;

    const firstStr = formatGame(firstGame, refs.first.boxUrl);
    let lastStr = "";
    if (refs.first.id !== refs.last.id) {
      lastStr = `<br>Latest Game: ${formatGame(lastGame, refs.last.boxUrl)}`;
    }

    const popupHtml = `
      <b>Score: ${scoreKey}</b><br>
      Times happened: <b>${freq}</b><br>
      First Game: ${firstStr}${lastStr}
      <span id="closePopup${scoreKey}" class="close-btn" data-popup="${scoreKey}_popup"></span>
    `;

    // Fill popup
    const popup = document.getElementById(`${scoreKey}_popup`);
    if (popup) popup.innerHTML = popupHtml;

    // Change cell class depending on logic
    const cell = document.getElementById(scoreKey);
    if (cell) {
        const [year, month, day] = firstGame.date.split("-").map(Number);
        const firstDate = new Date(year, month - 1, day);
        const cutoff = new Date(2025, 5, 1); // June 1, 2025 (month 5 = June)
      
      cell.classList.remove("Blank", "PastScorigami", "Scorigami");
      if (firstDate >= cutoff) {
        cell.classList.add("Scorigami");
      } else {
        cell.classList.add("PastScorigami");
      }
    }
  });
}

document.addEventListener("DOMContentLoaded", populatePopups);