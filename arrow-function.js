// Before ES6
const add = function sum(x,y){
 return x+y;
}
console.log(add(10,20));

// After ES6
let sum = (x,y) => x+y;
// console.log(sum(1,2));
const summation = x => x+100;
console.log(summation(10));
