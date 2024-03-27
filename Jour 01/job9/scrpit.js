function tri(numbers, order) {
    if (order !== "asc" && order !== "desc") {
        console.error("Le paramètre 'order' doit être 'asc' ou 'desc'.");
        return; // Arrête la fonction si le paramètre 'order' est incorrect
    }

    if (order === "asc") {
        numbers.sort((a, b) => a - b); // Tri ascendant
    } else {
        numbers.sort((a, b) => b - a); // Tri décroissant
    }

    return numbers; // Retourne le tableau trié
}

// Exemple d'utilisation de la fonction
let numbers = [4, 6, 9, 1, 4];
console.log(tri(numbers, "asc"));  
console.log(tri(numbers, "desc"));
console.log(tri(numbers, "des"));
