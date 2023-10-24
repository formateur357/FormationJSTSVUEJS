// Exercice : Gestion avancée d'une liste d'utilisateurs

// Contexte : Vous travaillez sur une plateforme e-commerce. Les utilisateurs peuvent s'inscrire, acheter des produits et laisser des commentaires. Vous voulez écrire une fonction pour gérer ces utilisateurs.

// Données initiales :

let utilisateurs = [
    { id: 1, nom: "Alice", email: "alice@email.com", achats: [100, 50, 200] },
    { id: 2, nom: "Bob", email: "bob@email.com", achats: [50, 50] },
];

let utilisateurs1 = [
    { id: 1, nom: "Alice", email: "alice@email.com", achats: [1000, 500, 2000] },
    { id: 3, nom: "Bobby", email: "bobby@email.com"},
];

// 1. Destructuration, valeurs par défaut et paramètres optionnels :

// Créez une fonction afficheResume qui prend un utilisateur et affiche un résumé de ses informations. L'achat est un paramètre optionnel. Si l'utilisateur n'a pas d'achats, considérez qu'il n'en a pas effectué.

function afficheResume({ id, nom, email, achats = [0]}) {
    console.log(`ID: ${id}, Nom: ${nom}, Email: ${email}, Achats: ${achats.join(", ")}`);
}
afficheResume(utilisateurs1[1]);

// 2. Rest Operator :

// Écrivez une fonction ajouterAchats qui accepte un utilisateur et un nombre indéterminé d'achats, puis ajoute ces achats à la liste des achats de l'utilisateur.

function ajouterAchats(utilisateur, ...nouveauxAchats) { // rest operator
    utilisateur.achats = [...utilisateur.achats, ...nouveauxAchats]; //spread operator
}
ajouterAchats(utilisateurs[0], ...utilisateurs[1].achats); //spread operator
afficheResume(utilisateurs[0]);

// 3. Spread Operator :

// Supposons que vous ayez une promotion où vous voulez offrir un article gratuit d'une valeur de 20€ à chaque utilisateur. Utilisez le spread operator pour ajouter cet achat à chaque utilisateur.

const promotion = 20;

const utilisateursAvecPromo = utilisateurs.map(utilisateur => {
    return {...utilisateur, achats: [...utilisateur.achats, promotion]}
})
afficheResume(utilisateursAvecPromo[1]);

// 4. Challenge Combiné :

// Créez une fonction fusionUtilisateurs qui accepte deux tableaux d'utilisateurs, fusionne les deux listes et pour les utilisateurs ayant le même email, combine leurs achats.

// Conseil : Vous aurez probablement besoin de map, find, et le spread operator pour cela.

function fusionUtilisateurs(liste1, liste2) {
    const fusion = [...liste1];

    liste2.forEach(utilisateur2 => {
        const utilisateur1 = fusion.find(u => u.email === utilisateur2.email);

        if (utilisateur1) {
            utilisateur1.achats = [...utilisateur1.achats, ...utilisateur2.achats];
        } else {
            fusion.push(utilisateur2);
        }
    });

    return fusion;
}

console.log(JSON.stringify(fusionUtilisateurs(utilisateurs, utilisateurs1)));