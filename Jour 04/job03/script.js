function filtrerPokemon() {
    const id = document.getElementById('id').value.trim();
    const nom = document.getElementById('nom').value.trim();
    const type = document.getElementById('type').value;

    // Envoyer une requête Fetch pour récupérer le fichier pokemon.json
    fetch('pokemon.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Erreur de récupération des données');
            }
            return response.json();
        })
        .then(data => {
            // Filtrer les données en fonction des critères
            const filteredPokemon = data.filter(pokemon => {
                return (
                    (id === '' || pokemon.id.toString().includes(id)) &&
                    (nom === '' || pokemon.nom.toLowerCase().includes(nom.toLowerCase())) &&
                    (type === '' || pokemon.type.toLowerCase() === type.toLowerCase())
                );
            });

            // Afficher les Pokémon filtrés
            afficherPokemon(filteredPokemon);
        })
        .catch(error => {
            console.error('Erreur de récupération des données:', error);
        });
}

function afficherPokemon(pokemonList) {
    const pokemonListDiv = document.getElementById('pokemonList');
    pokemonListDiv.innerHTML = '';

    if (pokemonList.length === 0) {
        pokemonListDiv.textContent = 'Aucun Pokémon trouvé';
        return;
    }

    const ul = document.createElement('ul');
    pokemonList.forEach(pokemon => {
        const li = document.createElement('li');
        li.textContent = `ID: ${pokemon.id}, Nom: ${pokemon.nom}, Type: ${pokemon.type}`;
        ul.appendChild(li);
    });
    pokemonListDiv.appendChild(ul);
}