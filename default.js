// before es6

// function add(num1 , num2){
//     // console.log(num1 ,num2);
//     if(num2 === undefined){
//     num2 =10;
//     }
//     const result = num1 + num2;
//     return result;
// }
// const answer = add(20);
// console.log(answer);
/* way2 */
// function add(num1 , num2){
//     // console.log(num1 ,num2);
//    num2 = num2 || 20;
//     const result = num1 + num2;
//     return result;
// }
// const answer = add(20);
// console.log(answer);
/* after es6 */
function add(num1 , num2=30){
    // console.log(num1 ,num2);
    const result = num1 + num2;
    return result;
}
const answer = add(20);
console.log(answer);


