let message: string
message = "Bonjour, Typescript"

console.log(message)

// deux notations possibles pour declarer une liste d'objet
const words: Array<string> = ['un', 'deux', 'trois']
const words2: string[] = ['un', 'deux', 'trois']

words.push(1);
words.push('1');

// exemple de spread operator

let fruits: string[] = ["apple", "orange", "cherry"]
let vegetables: string[] = ["carrot", "potato"]

let food: string[] = [...fruits, ...vegetables]

let fruitsCopy: string[] = [...fruits]

let person: object = { firstName: "john", lastName: "Vincent"}
let details: object = { age: 25, nationality: "American" }

let personDetails: object = { ...person, ...details };