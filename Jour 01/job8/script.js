//Fonction pour vérifier si le nmbr est premier
function estPremier(nombre) {
    if (nombre <= 1) return false;
    if (nombre <= 3) return true;

    // Vérifie si le nombre est divisible par 2 ou 3
    if (nombre % 2 === 0 || nombre % 3 === 0) return false;

    // Vérifie les diviseurs potentiels jusqu'à la racine carrée du nombre
    for (let i = 5; i * i <= nombre; i += 6) {
        if (nombre % i === 0 || nombre % (i + 2) === 0) {
            return false;
        }
    }
    return true;
}

function sommeNombresPremiers(a, b) {
    if (estPremier(a) && estPremier(b)) {
        return a + b;
    } else {
        return false;
    }
}

// Exemples d'utilisation de la fonction
console.log(sommeNombresPremiers(3, 5));  
console.log(sommeNombresPremiers(4, 7));  // Renvoie false car 4 n'est pas premier
console.log(sommeNombresPremiers(2, 9)); 
console.log(sommeNombresPremiers(7, 5)); 


