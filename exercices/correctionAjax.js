document.getElementById("contactForm").addEventListener("submit", () => {
    event.preventDefault();

    let nom =document.getElementById("name").value;
    let email =document.getElementById("email").value;
    let message =document.getElementById("message").value;
    let feedback =document.getElementById("feedback");

    if (nom === "" || email === "" || message === "") {
        feedback.textContent = "Veuillez remplir tous les champs."
        return ;
    }

    let formData = new URLSearchParams();
    formData.append("nom", nom);
    formData.append("email", email);
    formData.append("message", message);

    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: formData,
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error("Erreur lors de l'envoie du formulaire.");
        }
    })
    .then(data => {
        feedback.textContent = "Merci ! Votre formulaire a ete soumis avec succes";
    })
    .catch(error => {
        feedback.textContent = "Erreur lors de la soumission du formulaire: " + error.message;
    })

})