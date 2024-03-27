function showhide(){
    let article = document.getElementById("article");

    if(article.style.display === "none") {    //article caché none
        article.style.display = "block";     //article visible
    } else {
        article.style.display = "none";
    }
}