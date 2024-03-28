$(document).ready(function() {
    $("#button").click(function() {
        fetch("expression.txt")
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            $("#expression").text(data);
        })
        .catch(error => {
            console.error('Il y a eu un problème avec votre requête Fetch:', error);
        });
    });
});