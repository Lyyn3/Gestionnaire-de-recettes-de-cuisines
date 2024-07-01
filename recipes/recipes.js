console.log("page view recipes admin");

const main = document.getElementById("main");
const divContainer = document.getElementById("container");
const buttonRemove = document.getElementById("button-remove");

buttonRemove.addEventListener("click", () => {
    console.log("click button supprimer la recette");
    main.removeChild(divContainer);
});
