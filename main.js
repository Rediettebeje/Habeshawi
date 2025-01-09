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


import FOODS_DATA from "./food.js";

// create a list of objects to store the data about the games using JSON.parse
const FOODS_JSON = JSON.parse(FOODS_DATA);

document.getElementById("search-btn").addEventListener("click", function () {
    const searchTerm = document.getElementById("search-input").value.toLowerCase();
    const searchResults =  FOODS_JSON.filter(food =>
        food.name.toLowerCase().includes(searchTerm) || food.description.toLowerCase().includes(searchTerm)
    );

    displaySearchResults(searchResults);
});

function displaySearchResults(results) {
    const menuSection = document.querySelector(".menu-items");
    menuSection.innerHTML = ""; // Clear previous results

    if (results.length === 0) {
        menuSection.innerHTML = "<p>No matching foods found.</p>";
        return;
    }

    results.forEach(food => {
        const menuItem = document.createElement("div");
        menuItem.classList.add("menu-item");

        menuItem.innerHTML = `
            <img src="../images/${food.image}" alt="${food.name}">
            <div class="menu-content">
                <h3>${food.name}</h3>
                <p>${food.description}</p>
                <span class="ingredients">${food.ingredients}</span>
            </div>
        `;
      
        menuSection.appendChild(menuItem);
    });
}
