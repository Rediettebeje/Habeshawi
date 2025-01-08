function openModal(imageSrc) {
    document.getElementById("imageModal").style.display = "block";
    document.getElementById("modalImage").src = imageSrc;
}

function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}

// Add this to each image
document.querySelectorAll('.gallery-item img').forEach(img => {
      img.addEventListener('click', () => openModal(img.src));
});

/*****************************************************************************
 * Challenge 2: Review the provided code. The provided code includes:
 * -> Statements that import data from games.js
 * -> A function that deletes all child elements from a parent element in the DOM
 */

// import the JSON data about the crowd funded games from the games.js file
import GAMES_DATA from "./food.js";

// create a list of objects to store the data about the games using JSON.parse
const GAMES_JSON = JSON.parse(GAMES_DATA);


// Function to search for a game
function searchGame() {
  const query = searchInput.value.toLowerCase(); // Get the search query in lowercase

  // Filter games by matching the name with the query
  const filteredGames = GAMES_JSON.filter((game) =>
    game.name.toLowerCase().includes(query)
  );

  // Clear the current game display
  deleteChildElements(gamesContainer);

  // Add the filtered games to the page
  if (filteredGames.length > 0) {
    addGamesToPage(filteredGames);
  } else {
    gamesContainer.innerHTML = "<p>No foods found matching your search.</p>";
  }
}

// Add an event listener to the search button
searchBtn.addEventListener("click", searchGame);

// Allow pressing Enter to trigger the search
searchInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    searchGame();
  }
});
