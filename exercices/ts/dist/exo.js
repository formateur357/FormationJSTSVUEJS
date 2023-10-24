// Exercice : Gestion avancée d'une liste d'utilisateurs
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
// Contexte : Vous travaillez sur une plateforme e-commerce. Les utilisateurs peuvent s'inscrire, acheter des produits et laisser des commentaires. Vous voulez écrire une fonction pour gérer ces utilisateurs.
// Données initiales :
var utilisateurs = [
    { id: 1, nom: "Alice", email: "alice@email.com", achats: [100, 50, 200] },
    { id: 2, nom: "Bob", email: "bob@email.com", achats: [50, 50] },
];
var utilisateurs1 = [
    { id: 1, nom: "Alice", email: "alice@email.com", achats: [1000, 500, 2000] },
    { id: 3, nom: "Bobby", email: "bobby@email.com" },
];
// 1. Destructuration, valeurs par défaut et paramètres optionnels :
// Créez une fonction afficheResume qui prend un utilisateur et affiche un résumé de ses informations. L'achat est un paramètre optionnel. Si l'utilisateur n'a pas d'achats, considérez qu'il n'en a pas effectué.
function afficheResume(_a) {
    var id = _a.id, nom = _a.nom, email = _a.email, _b = _a.achats, achats = _b === void 0 ? [0] : _b;
    console.log("ID: " + id + ", Nom: " + nom + ", Email: " + email + ", Achats: " + achats.join(", "));
}
afficheResume(utilisateurs1[1]);
// 2. Rest Operator :
// Écrivez une fonction ajouterAchats qui accepte un utilisateur et un nombre indéterminé d'achats, puis ajoute ces achats à la liste des achats de l'utilisateur.
function ajouterAchats(utilisateur) {
    var nouveauxAchats = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        nouveauxAchats[_i - 1] = arguments[_i];
    }
    utilisateur.achats = __spreadArrays(utilisateur.achats, nouveauxAchats); //spread operator
}
ajouterAchats.apply(void 0, __spreadArrays([utilisateurs[0]], utilisateurs[1].achats)); //spread operator
afficheResume(utilisateurs[0]);
// 3. Spread Operator :
// Supposons que vous ayez une promotion où vous voulez offrir un article gratuit d'une valeur de 20€ à chaque utilisateur. Utilisez le spread operator pour ajouter cet achat à chaque utilisateur.
var promotion = 20;
var utilisateursAvecPromo = utilisateurs.map(function (utilisateur) {
    return __assign(__assign({}, utilisateur), { achats: __spreadArrays(utilisateur.achats, [promotion]) });
});
afficheResume(utilisateursAvecPromo[1]);
// 4. Challenge Combiné :
// Créez une fonction fusionUtilisateurs qui accepte deux tableaux d'utilisateurs, fusionne les deux listes et pour les utilisateurs ayant le même email, combine leurs achats.
// Conseil : Vous aurez probablement besoin de map, find, et le spread operator pour cela.
function fusionUtilisateurs(liste1, liste2) {
    var fusion = __spreadArrays(liste1);
    liste2.forEach(function (utilisateur2) {
        var utilisateur1 = fusion.find(function (u) { return u.email === utilisateur2.email; });
        if (utilisateur1) {
            utilisateur1.achats = __spreadArrays(utilisateur1.achats, utilisateur2.achats);
        }
        else {
            fusion.push(utilisateur2);
        }
    });
    return fusion;
}
console.log(JSON.stringify(fusionUtilisateurs(utilisateurs, utilisateurs1)));
