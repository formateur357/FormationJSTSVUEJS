// Exo1:

let celsius = [0, 20, 25, 30, 100];

// Conversion de températures :
// Convertissez un tableau de températures en degrés Celsius en degrés Fahrenheit en utilisant map.

let fahrenheit = celsius.map(temp => (temp * 9 / 5) + 32);
console.log(fahrenheit);

// Exo2 :

let articles = [{nom: 'Livre', prix: 15}, {nom: 'Cahier', prix: 5}, {nom: 'Stylo', prix: 2}];

// Calcul du total des prix :
// Calculez le total des prix d'articles en utilisant reduce.

let total = articles.reduce((acc, article) => acc + article.prix, 0);
console.log(total);

// Exo3 :

let nombres = [12, 3, 8, 29, 24, 11];

// Filtrer les nombres pairs :
// À partir d'un tableau de nombres, filtrez uniquement les nombres pairs en utilisant filter.

let pairs = nombres.filter(num => num % 2 === 0);
console.log(pairs);

// Exo4 :

let mots = ["apple", "banana", "cherry", "date", "fig", "grape"];

// Extraire des sous-éléments :
// À partir d'un tableau de mots, utilisez slice pour extraire les mots d'indice 2 à 4 (inclus).

console.log(mots.slice(2, 5));

// Exo5 :

// Trier par longueur de chaîne :
// Trier le tableau précédent (mots) par la longueur des mots en utilisant sort.

// console.log(mots.sort((a, b) => (a.length === b.length) ? b.charCodeAt(0) - a.charCodeAt(0) : a.length - b.length));
console.log(mots.sort((a, b) => (a.length === b.length) ? b.localeCompare(a) : a.length - b.length));

// Exo6 :

let nums = [1, 2, 3, 4, 5, 6];

// Chaînage de méthodes :
// À partir d'un tableau de nombres, trouvez la somme des carrés des nombres impairs. Pour cela, vous devrez combiner filter, map et reduce.

let start = performance.now();
let sumOfSquare = nums.filter(n => n % 2 !== 0)
                        .map(n => n * n)
                        .reduce((acc, num) => acc + num, 0);
let end = performance.now();
let time = end - start;
console.log(time);

start = performance.now();
let sumOfSquareOpti = nums.reduce((acc, n) => {
    if (n % 2 !== 0) {
        acc += n * n;
    }
    return acc;
}, 0);
end = performance.now();
time = end - start;
console.log(time);
// console.log(sumOfSquareOpti);