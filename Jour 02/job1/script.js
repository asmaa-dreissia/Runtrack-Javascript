function citation(){
    let citationElement = document.getElementById("citation");
    let citationText = citationElement.textContent.trim();
        console.log(citationText);
}

const button = document.getElementById("button");
if (button) {
    button.addEventListener("click", citation);
} else {
    console.log("Le bouton avec l'id 'button' n'a pas été trouvé.")
}