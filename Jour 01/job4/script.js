function bisextile(annee) {
    if ((annee % 4 === 0 && annee % 100 !== 0) || annee % 400 === 0) {
        return true;
    } else {
        return false; 
    }
}


console.log(bisextile(2000)); 
console.log(bisextile(2024));  
console.log(bisextile(2021)); 
console.log(bisextile(2040)); 


// bissextile si l'annéé :
//          -Divisible par 400
//          -Divisible par 4 mais pas par 100 

// non bissextile si l'annéé :
//          -Divisible par 100 mais pas par 400
//          -Non divisible par 4 