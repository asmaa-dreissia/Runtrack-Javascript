const button = document.getElementById("button");
const compteur = document.getElementById("compteur");

// Variable pour stocker le nombre de clics
let nombreClics = 0;

// Fonction pour ajouter 1 au compteur et mettre à jour le contenu du paragraphe
function clic() {
    nombreClics++;
    compteur.textContent = nombreClics;
}

button.addEventListener("click", clic);
