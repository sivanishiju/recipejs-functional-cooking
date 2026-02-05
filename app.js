const recipes = [
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

            <p>${recipe.description}</p>

            <button onclick="toggleDetails(${recipe.id})">
                View Recipe
            </button>

            <div class="recipe-details" id="details-${recipe.id}" style="display:none;">
                <h4>Ingredients</h4>
                ${renderList(recipe.ingredients)}

                <h4>Steps</h4>
                ${renderList(recipe.steps)}
            </div>
        </div>
    `;
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
