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
