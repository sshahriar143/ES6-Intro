const arr1 = [1,2,3,5,8];
const arr2 = [...arr1,10,20,30];
// console.log(arr2);
const newArr =[88,99,66, ...arr2];
// console.log(newArr);

const numbers = [10,20];
function calculate(x,y){
    console.log('sum: ' + (x+y))
}
// calculate(...numbers)