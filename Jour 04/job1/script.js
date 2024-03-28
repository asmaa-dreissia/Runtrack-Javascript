$(document).ready(function() {
    $("#button").click(function() {    // attache un gestionnaire d'événements de clic à l'élément avec l'ID "button"
        fetch("expression.txt")       // envoie une requête pour récupérer le contenu du fichier expression.txt.
            .then(response => {       // spécifie ce qu'il faut faire une fois que la réponse à la requête est reçue du serveur
                if (!response.ok) {
                    throw new Error('Erreur');
                }
                return response.text();        //Si la réponse est ok, cette ligne extrait le texte de la réponse et retourne une nouvelle promesse avec le texte extrait.
            })
            .then(data => {
                $("#expression").text(data);    //Cette ligne utilise jQuery pour sélectionner l'élément avec l'ID "expression" et y insérer le texte récupéré à partir du fichier expression.txt.
            })
            .catch(error => {
                console.error('Il y a eu un problème avec votre requête Fetch:', error);
            });
    });
});


