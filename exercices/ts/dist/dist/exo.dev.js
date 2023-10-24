"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

// Exercice : Gestion avancée d'une liste d'utilisateurs
// Contexte : Vous travaillez sur une plateforme e-commerce. Les utilisateurs peuvent s'inscrire, acheter des produits et laisser des commentaires. Vous voulez écrire une fonction pour gérer ces utilisateurs.
// Données initiales :
var utilisateurs = [{
  id: 1,
  nom: "Alice",
  email: "alice@email.com",
  achats: [100, 50, 200]
}, {
  id: 2,
  nom: "Bob",
  email: "bob@email.com",
  achats: [50, 50]
}];
var utilisateurs1 = [{
  id: 1,
  nom: "Alice",
  email: "alice@email.com",
  achats: [1000, 500, 2000]
}, {
  id: 3,
  nom: "Bobby",
  email: "bobby@email.com",
  achats: [250, 250]
}]; // 1. Destructuration, valeurs par défaut et paramètres optionnels :
// Créez une fonction afficheResume qui prend un utilisateur et affiche un résumé de ses informations. L'achat est un paramètre optionnel. Si l'utilisateur n'a pas d'achats, considérez qu'il n'en a pas effectué.

function afficheResume(_a) {
  var id = _a.id,
      nom = _a.nom,
      email = _a.email,
      _b = _a.achats,
      achats = _b === void 0 ? [0] : _b;
  console.log("ID: " + id + ", Nom: " + nom + ", Email: " + email + ", Achats: " + achats.join(", "));
}

afficheResume(utilisateurs[0]); // 2. Rest Operator :
// Écrivez une fonction ajouterAchats qui accepte un utilisateur et un nombre indéterminé d'achats, puis ajoute ces achats à la liste des achats de l'utilisateur.

function ajouterAchats(utilisateur) {
  for (var _len = arguments.length, nouveauxAchats = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    nouveauxAchats[_key - 1] = arguments[_key];
  }

  // rest operator
  utilisateur.achats = [].concat(_toConsumableArray(utilisateur.achats), nouveauxAchats); //spread operator
}

ajouterAchats.apply(void 0, [utilisateurs[0]].concat(_toConsumableArray(utilisateurs[1].achats))); //spread operator

afficheResume(utilisateurs[0]); // 3. Spread Operator :
// Supposons que vous ayez une promotion où vous voulez offrir un article gratuit d'une valeur de 20€ à chaque utilisateur. Utilisez le spread operator pour ajouter cet achat à chaque utilisateur.

var promotion = 20;
var utilisateursAvecPromo = utilisateurs.map(function (utilisateur) {
  return _objectSpread({}, utilisateur, {
    achats: [].concat(_toConsumableArray(utilisateur.achats), [promotion])
  });
});
afficheResume(utilisateursAvecPromo[1]); // 4. Challenge Combiné :
// Créez une fonction fusionUtilisateurs qui accepte deux tableaux d'utilisateurs, fusionne les deux listes et pour les utilisateurs ayant le même email, combine leurs achats.
// Conseil : Vous aurez probablement besoin de map, find, et le spread operator pour cela.

function fusionUtilisateurs(liste1, liste2) {
  var fusion = _toConsumableArray(liste1);

  liste2.forEach(function (utilisateur2) {
    var utilisateur1 = fusion.find(function (u) {
      return u.email === utilisateur2.email;
    });

    if (utilisateur1) {
      utilisateur1.achats = [].concat(_toConsumableArray(utilisateur1.achats), _toConsumableArray(utilisateur2.achats));
    } else {
      fusion.push(utilisateur2);
    }
  });
  return fusion;
}

console.log(JSON.stringify(fusionUtilisateurs(utilisateurs, utilisateurs1)));