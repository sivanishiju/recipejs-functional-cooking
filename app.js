/* =========================
   RECIPE DATA
========================= */

const recipes = [
  {
    id: 1,
    title: "Pasta Alfredo",
    category: "veg",
    ingredients: ["pasta", "cream", "cheese", "garlic"],
    time: 25,
    instructions: "Boil pasta. Prepare creamy sauce. Mix together."
  },
  {
    id: 2,
    title: "Chicken Curry",
    category: "non-veg",
    ingredients: ["chicken", "onion", "spices", "tomato"],
    time: 40,
    instructions: "Cook chicken with spices and onion-tomato base."
  },
  {
    id: 3,
    title: "Grilled Cheese Sandwich",
    category: "veg",
    ingredients: ["bread", "cheese", "butter"],
    time: 10,
    instructions: "Butter bread, add cheese, grill until golden."
  }
];

/* =========================
   STATE
========================= */

let searchQuery = "";
let currentFilter = "all";
let currentSort = "none";

/* =========================
   DOM ELEMENTS
========================= */

const recipeContainer = document.getElementById("recipe-container");
const searchInput = document.getElementById("search-input");

/* =========================
   PURE FUNCTIONS
========================= */

// Search
const filterBySearch = (recipes, query) => {
  if (!query) return recipes;

  const lowerQuery = query.toLowerCase();

  return recipes.filter(recipe =>
    recipe.title.toLowerCase().includes(lowerQuery) ||
    recipe.ingredients.some(ingredient =>
      ingredient.toLowerCase().includes(lowerQuery)
    )
  );
};

// Filter
const applyFilter = (recipes, filter) => {
  if (filter === "all") return recipes;
  return recipes.filter(recipe => recipe.category === filter);
};

// Sort
const applySort = (recipes, sort) => {
  if (sort === "time-asc") {
    return [...recipes].sort((a, b) => a.time - b.time);
  }
  if (sort === "time-desc") {
    return [...recipes].sort((a, b) => b.time - a.time);
  }
  return recipes;
};

/* =========================
   RENDERING
========================= */

const renderRecipes = (recipes) => {
  recipeContainer.innerHTML = "";

  if (recipes.length === 0) {
    recipeContainer.innerHTML = "<p>No recipes found.</p>";
    return;
  }

  recipes.forEach(recipe => {
    const card = document.createElement("div");
    card.className = "recipe-card";

    card.innerHTML = `
      <h3>${recipe.title}</h3>
      <p><strong>Time:</strong> ${recipe.time} mins</p>
      <p><strong>Ingredients:</strong> ${recipe.ingredients.join(", ")}</p>
      <button class="details-btn">Show Details</button>
      <p class="instructions hidden">${recipe.instructions}</p>
    `;

    const btn = card.querySelector(".details-btn");
    const instructions = card.querySelector(".instructions");

    btn.addEventListener("click", () => {
      instructions.classList.toggle("hidden");
      btn.textContent = instructions.classList.contains("hidden")
        ? "Show Details"
        : "Hide Details";
    });

    recipeContainer.appendChild(card);
  });
};

/* =========================
   UPDATE DISPLAY
========================= */

const updateDisplay = () => {
  let result = recipes;

  result = filterBySearch(result, searchQuery);
  result = applyFilter(result, currentFilter);
  result = applySort(result, currentSort);

  renderRecipes(result);
};

/* =========================
   EVENTS
========================= */

// Search
searchInput.addEventListener("input", (e) => {
  searchQuery = e.target.value;
  updateDisplay();
});

// Filter buttons (optional if added in HTML)
document.querySelectorAll(".filter-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    currentFilter = btn.dataset.filter;
    updateDisplay();
  });
});

// Sort buttons (optional if added in HTML)
document.querySelectorAll(".sort-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    currentSort = btn.dataset.sort;
    updateDisplay();
  });
});

/* =========================
   INITIAL LOAD
========================= */

updateDisplay();
