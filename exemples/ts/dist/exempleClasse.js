// Exemple type de base
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
var isDone = false;
var age = 42;
var firstName = "john";
var list = [1, 2, 3];
var list2 = [0, 1, 2];
var x = ["hello", 12];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
// Exemple classe
var Person = /** @class */ (function () {
    function Person(name, age, isAlive) {
        this.age = age;
        this.isAlive = isAlive;
        this.name = name;
        this.age = age;
        this.isAlive = isAlive;
    }
    Person.prototype.greet = function () {
        console.log("Hello, " + this.name);
    };
    return Person;
}());
var james = new Person("james", 18, true);
james.greet();
// exemple d'heritage de classe
var Animal = /** @class */ (function () {
    function Animal(name, age) {
        this.name = name;
        this.age = age;
    }
    return Animal;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.showAge = function () {
        console.log("This cat is " + this.age + " years old");
    };
    return Cat;
}(Animal));
var myCat = new Cat("Gus", 19);
myCat.showAge();
// Exemple de getters et setters
var Rectangle = /** @class */ (function () {
    function Rectangle(_width, _height) {
        this._width = _width;
        this._height = _height;
    }
    Object.defineProperty(Rectangle.prototype, "area", {
        get: function () {
            return this._width * this._height;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "width", {
        set: function (value) {
            if (value > 0) {
                this._width = value;
            }
        },
        enumerable: false,
        configurable: true
    });
    return Rectangle;
}());
// Exemple classe abstraite
var Shape = /** @class */ (function () {
    function Shape() {
    }
    return Shape;
}());
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(side) {
        var _this = _super.call(this) || this;
        _this.side = side;
        return _this;
    }
    Square.prototype.area = function () {
        return this.side * this.side;
    };
    return Square;
}(Shape));
var carre = new Square(4);
console.log(carre.area());
// methodes statiques
var SquareStatic = /** @class */ (function () {
    function SquareStatic(side) {
        this.side = side;
    }
    SquareStatic.area = function (side) {
        return side * side;
    };
    return SquareStatic;
}());
console.log(SquareStatic.area(4));
// propriete statique
var Counter = /** @class */ (function () {
    function Counter() {
    }
    Counter.increment = function () {
        this.count++;
    };
    Counter.count = 0;
    return Counter;
}());
