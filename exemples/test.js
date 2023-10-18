var square = function (x) {
    return x * x;
};
let mult = function (f1, f2) {
    return function (n) {
      return f1(n) * f2(n);
    };
};
var foo = mult(square, square);
var value = foo(2);
console.log(value); // 16
