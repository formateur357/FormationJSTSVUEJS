// var square = function (x) {
//     return x * x;
// };
// let mult = function (f1, f2) {
//     return function (n) {
//       return f1(n) * f2(n);
//     };
// };
// var foo = mult(square, square);
// var value = foo(2);
// console.log(value); // 16

// console.log(null == undefined);
// console.log(null === undefined);

let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];
let arr3 = Object.assign([], arr1);

arr3[3] = 4;

console.log(arr3);
console.log(arr1);

console.log(arr1 == arr2);
console.log(arr1 === arr2);
console.log(arr1 === arr3);

console.log(date1.getTime() === date2.getTime());
console.log(date1 > date2);