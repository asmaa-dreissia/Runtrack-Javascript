//Gérer l'événement de clic sur le bouton de confirmation d'achat
document.getElementById('confirmPurchaseBtn').addEventListener('click', function() {
    // Ajoutez ici le code pour effectuer l'achat
    alert('Achat effectué avec succès !');
  });

//jumbotronText
let bladeRunnerQuotes = [
    "Si seulement vous pouviez voir ce que j'ai vu de vos propres yeux.",
    "C'est une expérience qui ne se répète pas, dans un certain sens.",
    "Je pense, Monsieur, ouais, que vous avez du courage."
];


// Fonction pour choisir une citation aléatoire
function getRandomQuote() {
    let randomIndex = Math.floor(Math.random() * bladeRunnerQuotes.length);
    return bladeRunnerQuotes[randomIndex];
}

// Écouteur d'événements pour le clic sur le bouton "Rebooter le Monde"
document.getElementById("rebootButton").addEventListener("click", function() {
    let jumbotronText = document.getElementById("jumbotronText");
    jumbotronText.innerHTML = "<h2 class='text-left mt-4'>Citation de Blade Runner :</h2><p>" + getRandomQuote() + "</p>";
});


// Sélection des boutons
$(document).ready(function() {
    // Sélection de tous les boutons dans le groupe
    var buttons = $('#rightListGroup .btn');

    // Ajout d'un gestionnaire d'événements clic à chaque bouton
    buttons.click(function() {
        // Suppression de la classe active de tous les boutons
        buttons.removeClass('active');
        // Ajout de la classe active au bouton cliqué
        $(this).addClass('active');
    });
});
