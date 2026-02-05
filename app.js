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
            <p>⏱️ ${recipe.time} min</p>
            <span class="difficulty ${recipe.difficulty}">
                ${recipe.difficulty}
            </span>
            <p>${recipe.description}</p>
        </div>
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
