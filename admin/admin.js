console.log("page admin");

const loginFormAdmin = document.getElementById("login-form-admin");
const loginForm = document.getElementById("login-form");
const span = document.getElementById("msg-error");
const adminChoices = document.getElementById("admin-options");
adminChoices.style.display = "none";
const buttonAdd = document.getElementById("button-add");
const buttonView = document.getElementById("button-view");
const msgErrorAddRecipe = document.getElementById("msg-error-add-recipe");
const addRecipeByAdmin = document.getElementById("add-recipe-by-admin");
addRecipeByAdmin.style.display = "none";
const viewRecipeAddByAdmin = document.getElementById(
    "view-recipe-add-by-admin"
);
viewRecipeAddByAdmin.style.display = "none";
const viewRecipeByAdmin = document.getElementById("view-recipe-by-admin");
viewRecipeByAdmin.style.display = "none";

// création d'un tableau d'objet d'admins
const admins = [
    {
        email: "admin1@cook.com",
        password: "azerty",
    },
    {
        email: "admin2@cook.com",
        password: "azerty",
    },
];
// console.log(admins);

// je le stock dans le local storage
localStorage.setItem("adminsProfil", JSON.stringify(admins));

// je récupère le localStorage des recipes pour que les ajout de nouvelles recettes soit push dedans par les admins
console.log(JSON.parse(localStorage.getItem("adminRecipes")));
const recipes = JSON.parse(localStorage.getItem("adminRecipes"));

//  je check l'input email et password
const checkAdminInput = () => {
    // console.log("ok fonction checkAdminInput");
    const emailAdmin = document.getElementById("email").value.trim();
    const passwordAdmin = document.getElementById("password").value.trim();

    // condition, l'input email et password ne doivent pas être vide
    if (emailAdmin === "" || passwordAdmin === "") {
        // console.log(`Attention ! L'un des champs est vide !`);
        span.textContent = "Attention ! L'un des champs est vide !";
        span.style.display = "block";
    }

    // pour qu'un admin puisse se connecter il faut que l'input email et password soient identiques à ceux du tableau admins

    // boucle find pour comparer email et password du tableau admins à celui de l'input
    const adminFind = admins.find(
        (admin) =>
            admin.email === emailAdmin && admin.password === passwordAdmin
    );

    // condition si admin non trouvé
    if (!adminFind) {
        // console.log("admin introuvable");
        span.textContent = "Attention ! Email ou mot de passe incorrect.";
        span.style.display = "block";

        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
    } else {
        // Sinon admin trouvé
        // console.log("admin trouvé");
        // le formulaire connexion disparît ainsi que la partie pour ajouter une recette
        loginFormAdmin.style.display = "none";
        addRecipeByAdmin.style.display = "none";
        // j'affiche les choix pour l'admin avec les button entre ajouter ou visualiser des recettes
        adminChoices.style.display = "flex";
        buttonAdd.style.display = "flex";
        buttonView.style.display = "flex";
    }
};

// je check les input de l'ajout de la recette
const checkAddRecipe = () => {
    // console.log("ok fonction checkAddRecipe");

    // lors de l'ajout de la nouvelle recette si l'un des champs est vide on en peut pas ajouter une nouvelle recette
    if (
        document.getElementById("title").value === "" ||
        document.getElementById("ingredients").value === "" ||
        document.getElementById("steps-recipe").value === "" ||
        document.getElementById("preparation-time").value === "" ||
        document.getElementById("cooking").value === "" ||
        document.getElementById("photo").value === ""
    ) {
        // message d'erreur
        msgErrorAddRecipe.textContent =
            "Attention ! L'un des champs est vide !";
        msgErrorAddRecipe.style.display = "block";
        viewRecipeAddByAdmin.style.display = "none";
    } else {
        viewRecipeAddByAdmin.style.display = "block";
        // j'enlève le message d'erreur
        msgErrorAddRecipe.textContent = "";

        // je récupère les valeurs de chaque propriété pour en faire un objet
        const recipe = {
            title: document.getElementById("title").value,
            ingredients: document.getElementById("ingredients").value,
            steps: document.getElementById("steps-recipe").value,
            prepTime: document.getElementById("preparation-time").value,
            cookTime: document.getElementById("cooking").value,
            photo: document.getElementById("photo").value,
        };
        console.log(recipe);

        // afficher la nouvelle recette
        const recipeContainer = document.createElement("div");
        recipeContainer.setAttribute("id", "recipe-container");
        const buttonContainer = document.createElement("div");
        buttonContainer.setAttribute("id", "button-container");
        const buttonEdit = document.createElement("button");
        buttonEdit.textContent = "Editer la recette";
        buttonEdit.setAttribute("id", "button-edit-new");
        const buttonDelete = document.createElement("button");
        buttonDelete.textContent = "Supprimer la recette";
        buttonDelete.setAttribute("id", "button-delete-new");
        const buttonAdd = document.createElement("button");
        buttonAdd.textContent = "Ajouter la recette";
        buttonAdd.setAttribute("id", "button-add-new");
        const title = document.createElement("h3");
        title.textContent = `Titre : ${recipe.title}`;
        title.setAttribute("id", "title-new");
        const ingredients = document.createElement("h3");
        ingredients.textContent = "Ingrédients :";
        ingredients.setAttribute("id", "ingredient-new");
        const liIngredients = document.createElement("li");
        liIngredients.textContent =
            document.getElementById("ingredients").value;
        liIngredients.setAttribute("id", "li-ingredients-new");
        const photo = document.createElement("img");
        photo.src = document.getElementById("photo").value;
        photo.setAttribute("id", "photo-new");
        const step = document.createElement("h3");
        step.textContent = "Recette :";
        step.setAttribute("id", "step-new");
        const steps = document.createElement("p");
        steps.textContent = document.getElementById("steps-recipe").value;
        steps.setAttribute("id", "steps-new");

        buttonContainer.append(buttonEdit, buttonDelete, buttonAdd);
        recipeContainer.append(
            buttonContainer,
            title,
            ingredients,
            liIngredients,
            photo,
            step,
            steps
        );

        viewRecipeAddByAdmin.appendChild(recipeContainer);

        // je vide les inputs de l'ajout d'une nouvelle recette
        document.getElementById("title").value = "";
        document.getElementById("ingredients").value = "";
        document.getElementById("steps-recipe").value = "";
        document.getElementById("preparation-time").value = "";
        document.getElementById("cooking").value = "";
        document.getElementById("photo").value = "";

        // le formulaire pour ajouter la nouvelle recette disparaît
        addRecipeByAdmin.style.display = "none";

        // editer la recette en cours par l'admin
        buttonEdit.addEventListener("click", () => {
            // console.log("click button éditer la recette par l admin");
        });

        // supprimer la recette en cours ajouté par l'admin
        buttonDelete.addEventListener("click", () => {
            // console.log("click button supprimer la recette par l admin");
            viewRecipeAddByAdmin.removeChild(recipeContainer);
            viewRecipeAddByAdmin.style.display = "none";
        });

        // ajouter la recette en cours par l'admin dans le localStorage
        buttonAdd.addEventListener("click", () => {
            // console.log("click button ajouter la recette par l admin");
            //  je push chaque nouvel objet recipe dans le tableau d'objet recipes lorsque l'admin click sur ajouter la recette
            recipes.push(recipe);
            console.log(recipes);
            // je le stock dans le local storage
            localStorage.setItem("adminRecipes", JSON.stringify(recipes));
            // je supprime la derniere recette ajoutée
            viewRecipeAddByAdmin.removeChild(recipeContainer);
            // je fais disparaître l'affichage de la dernière recette ajoutée
            viewRecipeAddByAdmin.style.display = "none";

            // j'aurais voulu qu'a chaque fois qu'on ajoute une nouvelle recette par l'admin elle s'affiche dans les recettes à visualiser par l'admin pour pouvoir soit l'editer ou la supprimer
        });
    }
};

// écouteur d'évènement sur le formulaire connexion administrateurs
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // console.log("click button se connecter");
    checkAdminInput();
});

// écouteur d'évènement sur le button ajouter une recette
buttonAdd.addEventListener("click", () => {
    // console.log("click button ajouter une recette");
    addRecipeByAdmin.style.display = "block";
    viewRecipeByAdmin.style.display = "none";
});

// écouteur d'évènement sur le form add recipe
addRecipeByAdmin.addEventListener("submit", (e) => {
    e.preventDefault();
    // console.log("click button ajouter la recette");
    checkAddRecipe();
    // viewRecipeAddByAdmin.style.display = "block";
});

//  écouteur d'évènement sur le button visualiser des recettes
buttonView.addEventListener("click", () => {
    // console.log("click button visualiser des recettes");
    viewRecipeByAdmin.style.display = "block";
    addRecipeByAdmin.style.display = "none";
    viewRecipeAddByAdmin.style.display = "none";
});
