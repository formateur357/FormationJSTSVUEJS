// Exemple type de base

let isDone: boolean = false
let age: number = 42
let firstName: string = "john"

let list: number[] = [1, 2, 3]
let list2: Array<number> = [0, 1, 2]

let x: [string, number] = ["hello", 12]

enum Color {Red, Green, Blue}

let c: Color = Color.Green

// Exemple classe

class Person {
    public name: string;

    constructor(name: string, private age: number, protected isAlive: boolean) {
        this.name = name
        this.age = age
        this.isAlive = isAlive
    }

    public greet(): void {
        console.log(`Hello, ${this.name}`)
    }
}

const james = new Person("james", 18, true)
james.greet()

// exemple d'heritage de classe

class Animal {
    private name: string
    protected age: number

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
}

class Cat extends Animal {
    showAge() {
        console.log(`This cat is ${this.age} years old`)
    }
}

const myCat: Cat = new Cat("Gus", 19)
myCat.showAge()


// Exemple de getters et setters

class Rectangle {
    constructor(private _width: number, private _height: number) {}

    public get area() {
        return this._width * this._height
    }

    public set width(value: number) {
        if (value > 0) {
            this._width = value
        }
    }
}

// Exemple classe abstraite

abstract class Shape {
    public abstract area(): number;
}

class Square extends Shape {
    constructor(public side: number) {
        super();
    }


    public area(): number {
        return this.side * this.side
    }
}

let carre = new Square(4)
console.log(carre.area())

// methodes statiques

class SquareStatic {
    constructor(public side: number) {}


    static area(side: number): number {
        return side * side
    }
}

console.log(SquareStatic.area(4))

// propriete statique

class Counter {
    static count: number = 0

    static increment(): void {
        this.count++
    }
}