// 1. Inversion de tableau

// Objectif : Inverser les éléments d'un tableau sans utiliser la méthode reverse().

function inverserTableau(tableau) {
    let resultat = [];

    for (let i = tableau.length - 1 ; i >= 0; i--) {
        resultat.push(tableau[i]);
    }

    // tableau.forEach(element => {
    //     resultat.unshift(element);
    // });

    return resultat;
}

const exemple = [1, 2, 3, 4, 5];
// console.log(exemple.reverse());
console.log(inverserTableau(exemple)); // [5, 4, 3, 2, 1]

// 2. Recherche dans un tableau d'objets

// Objectif : Écrire une fonction qui, étant donné un tableau d'objets et une clé, renvoie tous les objets qui ont une valeur spécifique pour cette clé.

const personnes = [
    { nom: "Jean", age: 25 },
    { nom: "Marie", age: 30 },
    { nom: "Luc", age: 25 },
];

function rechercheParCle(tab, cle, valeur) {
    return tab.filter(obj => obj[cle] === valeur);
}

console.log(JSON.stringify(rechercheParCle(personnes, 'age', 25)));
// [{ nom: "Jean", age: 25 }, { nom: "Luc", age: 25 }]

// 3. Supprimer les doublons d'un tableau

// Objectif : Écrire une fonction qui prend un tableau en entrée et renvoie un nouveau tableau sans doublons.

function supprimerDoublons(tableau) {
    let unique = [];

    tableau.forEach(element => {
        if (!unique.includes(element)) {
            unique.push(element);
        }
    });

    return unique
    // return Array.from(new Set(tableau));
}

const exemple2 = [1, 2, 2, 3, 4, 4, 5];
console.log(supprimerDoublons(exemple2)); // [1, 2, 3, 4, 5]

// 4. Compter les occurrences dans un tableau

// Objectif : Écrire une fonction qui compte le nombre d'occurrences de chaque élément dans un tableau.

function compterOccurrences(tableau) {
    // let compteur = {};

    // for (let item of tableau) {
    //     if (!compteur[item]) {
    //         compteur[item] = 1;
    //     } else {
    //         compteur[item]++;
    //     }
    // }

    // return compteur;

    return tableau.reduce((acc, item) => {
        acc[item] = (acc[item] || 0) + 1; // soit acc[item] existe et j'incremente de 1 sa valeur accc[item] = acc[item] + 1 , soit il n'existe pas et acc[item] = 0 + 1
        return acc;
    }, {});
}

const exemple3 = ["pomme", "banane", "pomme", "orange", "banane", "pomme"];
console.log(compterOccurrences(exemple3));
// { pomme: 3, banane: 2, orange: 1 }

// 5. Fusionner deux objets

// Objectif : Écrire une fonction qui fusionne deux objets. Si les deux objets ont des propriétés en commun, les valeurs de l'objet secondaire devraient écraser celles de l'objet principal.

function fusionnerObjets(obj1, obj2) {
    // Utilisez l'opérateur de décomposition (spread operator) pour fusionner les objets
    // Les propriétés de obj2 écraseront celles de obj1 en cas de conflit
    
    // return { ...obj1, ...obj2 };

    let fusion = Object.assign({}, obj1);

    for (let key in obj2) {
        fusion[key] = obj2[key];
    }

    return fusion;
}

const objA = { a: 1, b: 2 };
const objB = { b: 3, c: 4 };
console.log(fusionnerObjets(objA, objB)); // { a: 1, b: 3, c: 4 }