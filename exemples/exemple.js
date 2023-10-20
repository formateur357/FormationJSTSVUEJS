let form = document.getElementById("monForm");

form.addEventListener("submit", () => {
    event.preventDefault(); // empeche la soumission par default et le rechargement de la page

    let nom = document.getElementById("name");
    let email = document.getElementById("email");

    if (nom === "" || email === "") {
        alert("Veuillez remplir tous les champs");
        return ;
    }

    // Traitement des donnees

    // Avec 

    // Avec fetch
    let formData = new URLSearchParams();
    formData.append("nom", nom);
    formData.append("email", email);

    fetch("votre_url_de_traitement.php", {
        method: "POST",
        body: formData,
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
    })
    .then(response => {
        if (response.ok) {
            return response.text();
        } else {
            throw new Error("Erreur lors de la soumission du formulaire")
        }
    })
    .then(data => {
        console.log(data);
        alert("Formulaire soumis avec succes!");
    })
    .catch(error => {
        console.error("Erreur", error);
        alert("Erreur lors de la soumission du formulaire");
    })
})

