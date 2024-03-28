function jsonValueKey(Stringjson, cle) {
    const jsonObject = JSON.parse(Stringjson);  //Convertit la chaîne de caractères JSON jsonString en un objet JavaScript en utilisant la méthode JSON.parse(). Cela permet de manipuler les données JSON comme un objet JavaScript.
    
    if (jsonObject.hasOwnProperty(cle)) {       //Vérifie si la clé spécifiée (key) existe dans l'objet JSON (jsonObject) en utilisant la méthode hasOwnProperty(). Cette méthode renvoie true si l'objet possède la propriété spécifiée, sinon elle renvoie false.
        return jsonObject[cle];
    } else {
        return "Clé non trouvée";
    }
}

$(document).ready(function() {
    const Stringjson = '{"name": "John", "age": 30, "city": "Marseille"}';   //Définit une chaîne de caractères JSON contenant des données.
    const cle = "city";                                                      //Définit la clé que nous voulons rechercher dans l'objet JSON.
    const result = jsonValueKey(Stringjson, cle);                            //Appelle la fonction jsonValueKey avec la chaîne JSON et la clé spécifiée, et stocke le résultat retourné dans la variable result.
    console.log(result);                                                     // Affiche le résultat dans la console
});