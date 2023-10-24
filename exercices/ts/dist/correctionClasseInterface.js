// 1. Interface Animal
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 2. classe Zoo
var Zoo = /** @class */ (function () {
    function Zoo() {
        this.animals = [];
    }
    Zoo.greeting = function () {
        return "Bienvenue au Zoo !";
    };
    Zoo.prototype.addAnimal = function (animal) {
        this.animals.push(animal);
    };
    Zoo.prototype.allSpeak = function () {
        return this.animals.map(function (animal) { return animal.speak(); });
    };
    Zoo.prototype.feedAll = function () {
        this.animals.forEach(function (animal) {
            if (animal instanceof Mammal) {
                animal.eat();
            }
        });
    };
    return Zoo;
}());
// 3. Classes Lion et Parrot
var Lion = /** @class */ (function () {
    function Lion(name, age) {
        this.name = name;
        this.age = age;
    }
    Lion.prototype.speak = function () {
        return "Roar !";
    };
    return Lion;
}());
var Parrot = /** @class */ (function () {
    function Parrot(name, age) {
        this.name = name;
        this.age = age;
    }
    Parrot.prototype.speak = function () {
        return "Hello, i'm a parrot.";
    };
    return Parrot;
}());
var Mammal = /** @class */ (function () {
    function Mammal() {
        this._energyLevel = 100;
    }
    Mammal.prototype.contructor = function (name, age) {
        this.name = name;
        this.age = age;
    };
    Object.defineProperty(Mammal.prototype, "energyLevel", {
        get: function () {
            return this._energyLevel;
        },
        set: function (value) {
            this._energyLevel = Math.max(0, value);
        },
        enumerable: false,
        configurable: true
    });
    return Mammal;
}());
var Monkey = /** @class */ (function (_super) {
    __extends(Monkey, _super);
    function Monkey(name, age) {
        return _super.call(this) || this;
    }
    Monkey.prototype.speak = function () {
        return "Ooh ooh ah ah!";
    };
    Monkey.prototype.eat = function () {
        this.energyLevel -= 10;
    };
    return Monkey;
}(Mammal));
var zoo = new Zoo();
var monkey = new Monkey("George", 3);
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
