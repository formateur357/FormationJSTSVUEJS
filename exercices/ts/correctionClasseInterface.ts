// 1. Interface Animal

interface Animal {
    name: string
    age: number

    speak(): string
}

// 2. classe Zoo

class Zoo {
    private animals: Animal[] = []

    static greeting(): string {
        return "Bienvenue au Zoo !"
    }

    public addAnimal(animal: Animal): void {
        this.animals.push(animal)
    }

    public allSpeak(): string[] {
        return this.animals.map(animal => animal.speak())
    }

    public feedAll(): void {
        this.animals.forEach(animal => {
            if (animal instanceof Mammal) {
                animal.eat()
            }
        })
    }
}

// 3. Classes Lion et Parrot

class Lion implements Animal {
    constructor(public name: string, public age: number) {}

    public speak(): string {
        return "Roar !"
    }
}

class Parrot implements Animal {
    constructor(public name: string, public age: number) {}

    public speak(): string {
        return "Hello, i'm a parrot."
    }
}

abstract class Mammal implements Animal {
    public name: string
    public age: number
    private _energyLevel: number = 100

    contructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    public get energyLevel(): number {
        return this._energyLevel
    }

    public set energyLevel(value: number) {
        this._energyLevel = Math.max(0, value)
    }

    abstract eat(): void;

    abstract speak(): string;
}

class Monkey extends Mammal {
    constructor(name: string, age: number) {
        super()
    }

    public speak(): string {
        return "Ooh ooh ah ah!"
    }

    public eat(): void {
        this.energyLevel -= 10
    }
}

const zoo = new Zoo();

const monkey = new Monkey("George", 3);
zoo.addAnimal(monkey);

zoo.feedAll();
console.log(monkey.energyLevel); // 90

// const zoo = new Zoo();
// console.log(Zoo.greeting());  // "Bienvenue au Zoo!"

// const lion = new Lion("Simba", 5);
// const parrot = new Parrot("Jack", 2);

// zoo.addAnimal(lion);
// zoo.addAnimal(parrot);

// console.log(zoo.allSpeak());  // ["Roar!", "Hello! I'm a parrot!"]