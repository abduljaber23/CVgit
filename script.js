// Sélectionner les éléments HTML pour afficher le profil et les dépôts
const reposDiv = document.getElementById("repos");
const display = document.querySelector("#display")




// Fonction pour récupérer et afficher les données du profil GitHub


// Fonction pour récupérer et afficher les dépôts publics GitHub
async function fetchGitHubRepos(username) {
    try {
        const response = await fetch(`https://api.github.com/users/${username}/repos`);
        if (!response.ok) {
            throw new Error(`GitHub repos not found: ${response.statusText}`);
        }
        const repos = await response.json();

        // Construire le contenu HTML pour chaque dépôt
        const reposHTML = repos
            .map(repo => `
                <div style="margin-bottom: 15px; border: 1px solid #77E4C8; padding: 15px; border-radius: 10px;">
                    <h3 style="margin: 0;"><a href="${repo.html_url}" target="_blank" style="text-decoration: none; font-size: 1.5rem; color: #FF6B6B;">${repo.name}</a></h3>
                    <p style="margin: 5px 0; color:#77E4C8;">${repo.description || "No description available."}</p>
                    <p style="font-size: 1.5rem; color: #fff;">Last updated: ${new Date(repo.updated_at).toLocaleDateString()}</p>
                </div>
            `)
            .join("");

        // Insérer le contenu dans la div
        reposDiv.innerHTML = reposHTML;
    } catch (error) {
        reposDiv.innerHTML = `<p>Error: ${error.message}</p>`;
    }
}

// Fonction pour afficher les dépots au clique

display.addEventListener("click", async() => {
    display.textContent = "Loading...";
    await fetchGitHubRepos(username);
    // je veux faire disparait le bouton après avoir cliqué dessus
    display.style.display = "none";
});


// Appeler les fonctions avec votre nom d'utilisateur GitHub
const username = "abduljaber23"; // Remplacez par votre nom d'utilisateur GitHub