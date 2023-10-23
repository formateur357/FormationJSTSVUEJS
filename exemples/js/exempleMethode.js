let nombres = [1, 2, 3, 5, 4, 6, 7, 8, 9, 10];
// work on a copy
// Filtrer les nombres impair
let nombresPairs = nombres.filter(num => num % 2 === 0);

// Multiplier chaque nombre restant par 2
let doubles = nombresPairs.map(num => num * 2);

// Calculer la somme de tous les elements du tableau
let somme = doubles.reduce((acc, num) => acc + num, 10);

// console.log(somme);

// slice exemple
let fruits = ["Pomme", "orange", "Bananes", "mangue", "raisin"];

let selection = fruits.slice(0, -1);

// console.log(selection);

// Sort exemple, work on the list

// let sortedFruits = fruits.sort().reverse();
// console.log(sortedFruits);

// fruits.sort((a, b) => a.length - b.length);
fruits.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
// console.log(fruits);

nombres.sort((a, b) => b - a);
// console.log(nombres);

let personnes = [
    { nom: "Jean", age: 45 },
    { nom: "Paul", age: 35 },
    { nom: "Pierre", age: 55 }
];

personnes.sort((a, b) => a.age - b.age);
// console.log(JSON.stringify(personnes));

let dates = [
    new Date(2022, 5, 10),
    new Date(2022, 3, 2),
    new Date(2012, 1, 22),
    new Date(2022, 3, 3)
];

dates.sort((a, b) => a - b);
// console.log(dates);

let motsFr = ["étudiant", "école", "school", "évasion"];
motsFr.sort((a, b) => a.localeCompare(b, 'en'));
console.log(motsFr);