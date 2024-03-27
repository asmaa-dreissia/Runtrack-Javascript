const textarea = document.getElementById("keylogger");

document.addEventListener("keydown", function(event) {
    const lettre = event.key.toLowerCase();

    // Vérification que c'est une lettre de l'alphabet
    if (/^[a-z]/.test(lettre)) {
        if (document.activeElement === textarea) {
            textarea.value += lettre ;
        } else {
            textarea.value += lettre;
        }
    }
});