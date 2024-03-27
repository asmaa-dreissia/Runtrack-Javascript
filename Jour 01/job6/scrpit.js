function fizzbuzz() {
    for (let i = 1; i <= 151; i++) {                //initialiser la variable i à 1 et l'itérer tant que i est inférieur ou égal à 151. À chaque itération, i est incrémenté de 1.
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

fizzbuzz();
