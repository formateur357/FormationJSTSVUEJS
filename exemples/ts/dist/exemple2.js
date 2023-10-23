var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var message;
message = "Bonjour, Typescript";
console.log(message);
// deux notations possibles pour declarer une liste d'objet
var words = ['un', 'deux', 'trois'];
var words2 = ['un', 'deux', 'trois'];
words.push(1);
words.push('1');
// exemple de spread operator
var fruits = ["apple", "orange", "cherry"];
var vegetables = ["carrot", "potato"];
var food = __spreadArrays(fruits, vegetables);
var fruitsCopy = __spreadArrays(fruits);
var person = { firstName: "john", lastName: "Vincent" };
var details = { age: 25, nationality: "American" };
var personDetails = __assign(__assign({}, person), details);
