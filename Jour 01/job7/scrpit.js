function jourTravaille(date) {
    const joursSemaine = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
    const moisEnLettres = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];

    const jourSemaine = joursSemaine[date.getDay()];
    const annee = date.getFullYear(); 
    const mois = moisEnLettres[date.getMonth()]; 
    const jour = date.getDate(); 

    // Tableau des jours fériés de l'année 2024
    const joursFeries2024 = [
        '2024-01-01', // Nouvel An
        '2024-05-01', // Fête du Travail
        '2024-05-08', // Victoire des Alliés
        '2024-07-14', // Fête Nationale
        '2024-08-15', // Assomption
        '2024-11-01', // Toussaint
        '2024-11-11', // Armistice
        '2024-12-25'  // Noël
    ];

    // Vérifie si la date correspond à un jour férié
    const dateStr = date.toISOString().slice(0, 10); // Convertit la date en format YYYY-MM-DD
    if (joursFeries2024.includes(dateStr)) {
        console.log(`Le ${jourSemaine} ${jour} ${mois} ${annee} est un jour férié.`);
        return;
    }

    // Vérifie si la date est un samedi ou un dimanche
    if (jourSemaine === "Samedi" || jourSemaine === "Dimanche") {
        console.log(`${jourSemaine} ${jour} ${mois} ${annee} est un week-end.`);
    } else {
        console.log(`${jourSemaine} ${jour} ${mois} ${annee} est un jour travaillé.`);
    }
}

// Exemple d'utilisation de la fonction avec une date
let dateTest = new Date(2024, 0, 1); 
jourTravaille(dateTest);

let dateTest2 = new Date(2024, 8, 15); 
jourTravaille(dateTest2);

let dateTest3 = new Date(2024, 11, 11); 
jourTravaille(dateTest3);

let dateTest4 = new Date('2024-11-11'); 
jourTravaille(dateTest4);

let dateTest5 = new Date('2024-12-25'); 
jourTravaille(dateTest5);