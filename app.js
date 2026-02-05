let favoriteRecipes = [];

    {
        id: 1,
        title: "Classic Spaghetti Carbonara",
        time: 25,
        difficulty: "easy",
        description: "A creamy Italian pasta dish made with eggs and cheese.",
        category: "pasta"
    },
    {
        id: 2,
        title: "Greek Salad",
        time: 15,
        difficulty: "easy",
        description: "Fresh vegetables with feta and olives.",
        category: "salad"
    }
];

const recipeContainer = document.querySelector('#recipe-container');
const renderSteps = (steps, index) => {
    if (index === steps.length) return "";
    return `<li>${steps[index]}</li>` + renderSteps(steps, index + 1);
};

const createRecipeCard = (recipe) => {
    return `
        <div class="recipe-card">
            <h3>${recipe.title}</h3>

            <div class="recipe-meta">
                <span>⏱️ ${recipe.time} min</span>
                <span class="difficulty ${recipe.difficulty}">
                    ${recipe.difficulty}
                </span>
            </div>

            <button onclick="toggleRecipe(${recipe.id})">
                View Recipe
            </button>

            <div class="recipe-details" id="details-${recipe.id}" style="display:none;">
                <h4>Ingredients</h4>
                <ul>
                    ${recipe.ingredients.map(item => `<li>${item}</li>`).join('')}
                </ul>

                <h4>Steps</h4>
                <ol>
                    ${renderSteps(recipe.steps, 0)}
                </ol>
            </div>
        </div>
    `;
};
const toggleRecipe = (id) => {
    (() => {
        const details = document.getElementById(`details-${id}`);
        details.style.display =
            details.style.display === "none" ? "block" : "none";
    })();
};

const renderList = (items, index = 0) => {
    if (index === 0) {
        return `<ul>${renderList(items, index + 1)}</ul>`;
    }

    if (index > items.length) {
        return "";
    }

    return `
        <li>${items[index - 1]}</li>
        ${renderList(items, index + 1)}
    `;
};


const renderRecipes = (recipesToRender) => {
    recipeContainer.innerHTML = recipesToRender
        .map(createRecipeCard)
        .join('');
};

renderRecipes(recipes);
const showAll = () => {
    renderRecipes(recipes);
};

const filterEasy = () => {
    const easyRecipes = recipes.filter(
        recipe => recipe.difficulty === "easy"
    );
    renderRecipes(easyRecipes);
};

const filterMedium = () => {
    const mediumRecipes = recipes.filter(
        recipe => recipe.difficulty === "medium"
    );
    renderRecipes(mediumRecipes);
};

const filterHard = () => {
    const hardRecipes = recipes.filter(
        recipe => recipe.difficulty === "hard"
    );
    renderRecipes(hardRecipes);
};

const quickRecipes = () => {
    const quick = recipes.filter(
        recipe => recipe.time < 30
    );
    renderRecipes(quick);
};
{
    id: 1,
    title: "Classic Spaghetti Carbonara",
    time: 25,
    difficulty: "easy",
    description: "A creamy Italian pasta dish made with eggs and cheese.",
    category: "pasta",
    ingredients: [
        "Spaghetti",
        "Eggs",
        "Cheese",
        "Black pepper"
    ],
    steps: [
        "Boil pasta",
        "Mix eggs and cheese",
        "Combine pasta with sauce",
        "Serve hot"
    ]
}
const toggleDetails = (id) => {
    (function () {
        const details = document.getElementById(`details-${id}`);
        details.style.display =
            details.style.display === "none" ? "block" : "none";
    })();
};
const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
        favorites = favorites.filter(favId => favId !== id);
    } else {
        favorites.push(id);
    }

    const favRecipes = recipes.filter(r => favorites.includes(r.id));
    renderRecipes(favRecipes);
};
const filterDifficulty = (level) => {
    const filtered = recipes.filter(recipe => recipe.difficulty === level);
    renderRecipes(filtered);
};

const showAll = () => {
    renderRecipes(recipes);
};
const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();

    const searchedRecipes = recipes.filter(recipe =>
        recipe.title.toLowerCase().includes(query)
    );

    renderRecipes(searchedRecipes);
});
const filterByDifficulty = (level) => {
    const filteredRecipes = recipes.filter(
        recipe => recipe.difficulty === level
    );
    renderRecipes(filteredRecipes);
};

const showAll = () => {
    renderRecipes(recipes);
};
const sortByTime = () => {
    const sortedByTime = [...recipes].sort(
        (a, b) => a.time - b.time
    );
    renderRecipes(sortedByTime);
};

const sortByName = () => {
    const sortedByName = [...recipes].sort(
        (a, b) => a.title.localeCompare(b.title)
    );
    renderRecipes(sortedByName);
};
ingredients: [
    "Pasta",
    "Eggs",
    "Cheese",
    "Pepper"
],
steps: [
    "Boil the pasta",
    "Cook the sauce",
    "Mix everything",
    "Serve hot"
]
const toggleFavorite = (id) => {
    if (favoriteRecipes.includes(id)) {
        favoriteRecipes = favoriteRecipes.filter(fav => fav !== id);
    } else {
        favoriteRecipes.push(id);
    }

    const favList = recipes.filter(recipe =>
        favoriteRecipes.includes(recipe.id)
    );

    renderRecipes(favList);
};
const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();

    const result = recipes.filter(recipe =>
        recipe.title.toLowerCase().includes(query)
    );

    renderRecipes(result);
});

