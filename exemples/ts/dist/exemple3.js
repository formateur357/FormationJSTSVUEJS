// Exemple de declaration d'interface et de classe en ts
var john = {
    firstName: "john",
    lastName: "Black"
};
var johnny = {
    firstName: "Johnny",
    salary: 390,
    age: 30
};
function greet(person) {
    return "Hello, " + person.firstName + " " + person.lastName + ", " + person.salary;
}
// console.log(greet(john))
console.log(greet(johnny));
var Clock = /** @class */ (function () {
    function Clock() {
        this.currentTime = new Date();
        this.previousTime = undefined;
    }
    Clock.prototype.setTime = function (d) {
        this.previousTime = this.currentTime;
        this.currentTime = d;
    };
    return Clock;
}());
var mySearch = function (src, sub) {
    return src.includes(sub);
};
console.log(mySearch("Hello, world!", "world"));
