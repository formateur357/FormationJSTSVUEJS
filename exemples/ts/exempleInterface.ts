// Exemple de declaration d'interface et de classe en ts

interface  Person {
    firstName: string,
    lastName?: string, // ? marque l'option
}

interface Employe extends Person {
    salary: number
}

const john: Person = {
    firstName: "john",
    lastName: "Black"
}

const johnny = {
    firstName: "Johnny",
    salary: 390,
    age: 30
}

function greet(person: Employe) {
    return `Hello, ${person.firstName} ${person.lastName}, ${person.salary}`
}

// console.log(greet(john))
console.log(greet(johnny))

// Exemple classe et interface

interface ClockInterface {
    currentTime : Date
    setTime(d: Date): void
}

class Clock implements ClockInterface {
    currentTime: Date = new Date()
    previousTime: Date|undefined = undefined

    setTime(d: Date): void {
        this.previousTime = this.currentTime
        this.currentTime = d
    }
}

// interface pour decrire des fonctions

interface SearchFunction {
    (source: string, subString: string): boolean
}

const mySearch: SearchFunction = function (src, sub) {
    return src.includes(sub)
}

console.log(mySearch("Hello, world!", "world"))