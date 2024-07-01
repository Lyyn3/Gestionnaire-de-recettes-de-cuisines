console.log("page home");

const searchbar = document.getElementById("search-bar");
const msgErrorSiteSearch = document.getElementById("msg-error-site-search");
const divViewRecipeSearchUser = document.getElementById(
    "view-recipe-search-user"
);
divViewRecipeSearchUser.style.display = "none";
const titleRecipe = document.getElementById("title-recipe");
const prepTimeRecipe = document.getElementById("prep-time-recipe");
const cookTimeRecipe = document.getElementById("cook-time-recipe");
const ingredientsRecipe = document.getElementById("ingredients-recipe");
const photoRecipe = document.getElementById("photo-recipe");
const stepsRecipe = document.getElementById("steps-recipe");
const enterRecipe = document.getElementById("enter");
const dishRecipe = document.getElementById("dish");
const dessertRecipe = document.getElementById("dessert");

// création d'un tableau d'objet pour les recettes que l'admin viendra push dedans lors des ajouts de recettes
const recipes = [
    {
        category: "Entrée",
        title: `Salade melon jambon cru`,
        ingredients: [
            {
                name: "melons",
                quantity: "2",
            },

            {
                name: "jambon cru",
                quantity: "8 tranches",
            },
            {
                name: "vinaigre balsamique",
                quantity: "2 c. à soupe",
            },
            {
                name: "basilic",
                quantity: "feuilles",
            },
            {
                name: "huile d'olive",
                quantity: "5 c. à soupe",
            },
        ],
        steps: `Coupez les melons en deux, ôtez les graines et à l'aide d'une cuillère parisienne, prélevez des boules dans la chair. Mélangez l'huile d'olive et le vinaigre balsamique. Ciselez les feuilles de basilic et ajoutez-les à la vinaigrette. Dans une assiette creuse, répartissez des boules de melon, versez la vinaigrette et ajoutez les tranches de jambon cru.`,
        prepTime: "25min",
        cookTime: "aucun",
        photo: `https://cdn.pixabay.com/photo/2015/02/05/16/42/melon-625130_960_720.jpg`,
    },
    {
        category: "Plat principal",
        title: "Saumon teriyaki",
        ingredients: [
            {
                name: "sauce soja sucrée",
                quantity: "20cl",
            },

            {
                name: "saké",
                quantity: "20cl",
            },
            {
                name: "mirin",
                quantity: "20cl",
            },
            {
                name: "pavés de saumon",
                quantity: "4",
            },
            {
                name: "graines de sésames",
                quantity: "1 pot",
            },
        ],
        steps: `Dans une petite casserole, mélanger la sauce soja sucrée, le saké, le mirin. Porter à ébullition. Laisser mijoter à feu moyen environ 10 minutes ou jusqu’à ce que la sauce soit sirupeuse.Ajoutez le saumon côté peau dans à feu moyen 10 minutes. Saupoudrer le dessus des pavés de saumon de graines de sésame.`,
        prepTime: "20min",
        cookTime: "25min",
        photo: `https://cdn.pixabay.com/photo/2015/04/08/13/13/food-712665_960_720.jpg`,
    },
    {
        category: "Dessert",
        title: "Fondant au chocolat",
        ingredients: [
            {
                name: "chocolat dessert noir",
                quantity: "200g",
            },
            {
                name: "oeufs",
                quantity: "4",
            },
            {
                name: "beurre",
                quantity: "100g",
            },
            {
                name: "sucre",
                quantity: "60g",
            },
            {
                name: "farine",
                quantity: "50g",
            },
        ],
        steps: `Préchauffez votre four Th.6/7 (200°C) en mode traditionnel. Dans une casserole, faites fondre le chocolat et le beurre coupé en morceaux au micro-ondes 2 minutes à 500Watts. Dans un saladier, ajoutez le sucre, les œufs, la farine et le chocolat. Mélangez bien. Beurrez et farinez votre moule à manqué en teflon de 20 cm et versez la pâte à gâteau ( si votre moule est plus grand doublez les quantités d'ingrédients). Faites cuire au four environ 10 à 11 minutes. A la sortie du four le gâteau ne paraît pas assez cuit. C'est normal, laissez-le refroidir puis démoulez- le.`,
        prepTime: "30min",
        cookTime: "10min",
        photo: `https://cdn.pixabay.com/photo/2018/11/19/05/43/cake-3824655_960_720.jpg`,
    },
    {
        category: "Dessert",
        title: "Fraisier",
        ingredients: [
            {
                name: "oeufs",
                quantity: "3",
            },

            {
                name: "sucre",
                quantity: "90g",
            },
            {
                name: "farine",
                quantity: "70g",
            },
            {
                name: "poudre d'amandes",
                quantity: "20g",
            },
            {
                name: "gousse de vanille",
                quantity: "1",
            },
            {
                name: "lait",
                quantity: "650g",
            },
            {
                name: "jaune d'oeufs",
                quantity: "100g",
            },
            {
                name: "sucre",
                quantity: "180g",
            },
            {
                name: "fleur de maïs",
                quantity: "75g",
            },
            {
                name: "beurre",
                quantity: "2 x 150g",
            },
            {
                name: "fraise",
                quantity: "650g",
            },
        ],
        steps: `À faire la veille :

On commence par la génoise : Préchauffe ton four à 180°. Dans un bol, verse les œufs, le sucre et fouette le tout pendant 10 minutes à l’aide d’un robot ou d’un batteur électrique : Ton mélange doit s’éclaircir et tripler de volume. Ajoute la farine, la poudre d’amandes et incorpore-les délicatement avec une maryse. Verse la pâte dans un cercle de 20cm (le même cercle que tu utiliseras pour le montage de ton fraisier). Enfourne pendant 20 minutes. À la sortie du four, laisse la génoise complètement refroidir puis, enveloppe-la dans du papier film alimentaire pour la placer au frais toute la nuit.
La crème mousseline : Fends ta gousse de vanille en deux pour récupérer les graines. Dans une casserole, verse le lait, les gousses et graines de vanille et porte le tout à ébullition sur feu moyen. Pendant ce temps, dans un bol fouette les jaunes d’œufs avec le sucre jusqu’à ce que ton mélange blanchisse. Ajoute la fleur de maïs et fouette de nouveau énergiquement. Verse ton lait bouillant sur ce mélange et fouette brièvement. Remets le tout dans la casserole, toujours sur feu moyen, et fouette sans jamais t’arrêter jusqu’à l’obtention d’une texture crémeuse : quand ta crème arrive à ébullition, continue de fouetter une minute. Retire la casserole du feu et ajoute 150 g de beurre coupé en morceaux que tu incorpores au fouet. Recouvre la crème pâtissière au contact avec du papier film alimentaire et laisse-la complètement refroidir au réfrigérateur jusqu’au lendemain.

Le lendemain :

Laisse tes 150g de beurre restant à température ambiante pendant une heure pour qu’il devienne crémeux. Récupère ta crème pâtissière, verse-la dans un bol et à l’aide d’un robot ou d’un batteur électrique, fouette-la 4 minutes pour la détendre et pour qu’elle soit à température ambiante. Tout en fouettant, incorpore petit à petit le beurre pommade jusqu’à l’obtention d’une crème mousseuse et aérienne (pendant environ 2 minutes) : Ta crème doit tenir au fouet mais attention à ne pas trop fouetter, sans quoi, ta crème risque de devenir granuleuse ! Verse la crème mousseline dans une poche à douille et place-la au frais.
Le montage : Coupe ta génoise de la veille en deux afin d’obtenir deux disques de génoises. Optionnel : À l’aide d’un pinceau alimentaire, imbibe-les généreusement d’un sirop (fais bouillir 60g d’eau avec 100g de sucre). Chemise un cercle à pâtisserie de 20 cm avec du Rhodoïd afin de faciliter le démoulage de ton fraisier. Commence par déposer un premier disque de génoise au fond de ton cercle Coupe quelques fraises en deux et fais-les adhérer face plate sur tout le Rhodoïd. Coupe 400g des fraises en petits morceaux. Coupe l’extrémité de ta poche à douille, puis, sur ta génoise, poche une première couche de crème mousseline et recouvre-la avec la moitié de tes fraises coupées en petits morceaux. Coupe les bords de ton deuxième cercle de génoise afin qu’il soit un peu plus petit que le premier puis dépose-le sur la crème et les fraises. Verse les fraises restantes et recouvre le tout avec la crème mousseline. Lisse le dessus à l’aide d’une spatule coudée ou avec le dos d’une cuillère. Place le fraisier au frais toute la nuit (ou au moins pendant 5 heures) avant le démoulage et la décoration finale. Il ne te reste plus qu’à le décorer à ta guise !`,
        prepTime: "1h",
        cookTime: "20min",
        photo: `https://cdn.pixabay.com/photo/2017/03/14/05/49/small-cake-2142072_960_720.jpg`,
    },
    {
        category: "Dessert",
        title: "Tarte aux pommes",
        ingredients: [
            {
                name: "pâte brisée",
                quantity: "250g",
            },

            {
                name: "pommes",
                quantity: "1kg",
            },
            {
                name: "sucre",
                quantity: "120g",
            },
            {
                name: "crème",
                quantity: "20cl",
            },
            {
                name: "oeufs",
                quantity: "2",
            },
            {
                name: "sucre vanillé",
                quantity: "1 sachet",
            },
        ],
        steps: `Abaissez la pâte, foncez un moule beurré et fariné. Épluchez puis coupez les pommes en quartiers. Disposez-les en cercles sur le fond. Battez les œufs avec les deux sucres et la crème puis versez ce flan sur la tarte. Enfournez pendant 30 à 40 min à 180°C.`,
        prepTime: "45min",
        cookTime: "30min",
        photo: `https://cdn.pixabay.com/photo/2021/11/14/21/11/dessert-6795727_960_720.jpg`,
    },
];
console.log(recipes);
// je le stock dans le localstorage
localStorage.setItem("adminRecipes", JSON.stringify(recipes));

// je crée une fonction flechée qui check l'input chercher une recette par l'user
const checkSearchInput = () => {
    // console.log("ok fontion checkSearchInput");
    // je stock la valeur de l'input dans une const
    const nameRecipe = document.getElementById("site-search").value.trim();
    console.log(nameRecipe);
    // condition si l'input est vide message d'erreur
    if (nameRecipe === "") {
        // console.log("champ vide");
        msgErrorSiteSearch.textContent = "Attention ! Le champ est vide !";
        msgErrorSiteSearch.style.display = "block";
        divViewRecipeSearchUser.style.display = "none";
    } else {
        divViewRecipeSearchUser.style.display = "flex";
        // sinon recherche de la recette
        // console.log("le champ n'est pas vide");
        // sinon enlève le message d'erreur
        msgErrorSiteSearch.textContent = "";
        // vider l'input
        document.getElementById("site-search").value = "";
        // utilise la boucle find pour comparer le titre de la recette que l'utilisateur cherche avec la base du localStorage
        const findRecipeByTitle = (title) => {
            const recipe = recipes.find((recipe) => recipe.title === title);
            return recipe || null;
        };
        // console.log(findRecipeByTitle(nameRecipe));
        // je stock la valeur dans une const
        const foundRecipe = findRecipeByTitle(nameRecipe);
        // condition si la recette recherché par l'utilisateur est différent du localstorage alors la recette n'est pas trouvée
        if (foundRecipe === null) {
            // console.log("recette non trouvée");
            // afficher message d'erreur
            msgErrorSiteSearch.textContent = "Recette non trouvée !";
            msgErrorSiteSearch.style.display = "block";
            divViewRecipeSearchUser.style.display = "none";
        } else {
            // sinon on affiche la recette
            // console.log("recette trouvée");
            // retirer le message d'erreur
            msgErrorSiteSearch.textContent = "";
            // afficher la recette cherché par l'user
            // titleRecipe.setAttribute("class", "title-recipe");
            titleRecipe.textContent = foundRecipe.title;
            prepTimeRecipe.textContent = `Temps de préparation : ${foundRecipe.prepTime}`;
            cookTimeRecipe.textContent = `Temps de cuisson : ${foundRecipe.cookTime}`;
            ingredientsRecipe.textContent = "Ingrédients :";
            //  pour chaque ingrédients trouvé une boucle pour créer une liste d'ingrédients
            foundRecipe.ingredients.forEach((ingredient) => {
                const oneIngredient = document.createElement("p");
                oneIngredient.textContent = `${ingredient.name} (${ingredient.quantity}) `;
                ingredientsRecipe.appendChild(oneIngredient);
            });
            photoRecipe.src = foundRecipe.photo;
            stepsRecipe.textContent = `Étapes : ${foundRecipe.steps}`;
            divViewRecipeSearchUser.append(
                titleRecipe,
                prepTimeRecipe,
                cookTimeRecipe,
                ingredientsRecipe,
                photoRecipe,
                stepsRecipe
            );
        }
    }
};

// écouteur d'évènement sur la search bar pour déclencher la recherche à la soumission
searchbar.addEventListener("submit", (e) => {
    e.preventDefault();
    // console.log("click rechercher une recette");
    // appel de la fonction
    checkSearchInput();
});

// écouteur d'évènement sur la catégorie Entrées
enterRecipe.addEventListener("click", () => {
    console.log("click sur entrées");
    // quand on click sur entrées il faut récupérer les recipes dans le localStorage faire une boucle sur category, récupérer toutes les entrées et afficher
});

// écouteur d'évènement sur la catégorie Plats
dishRecipe.addEventListener("click", () => {
    console.log("click sur plats");
    // quand on click sur plats il faut récupérer les recipes dans le localStorage faire une boucle sur category, récupérer tous les plats et afficher
});

// écouteur d'évènement sur la catégorie Desserts
dessertRecipe.addEventListener("click", () => {
    console.log("click sur desserts");
    // quand on click sur desserts il faut récupérer les recipes dans le localStorage faire une boucle sur category, récupérer tous les desserts et afficher
});
