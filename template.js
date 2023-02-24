const name1 ='Shahriar Shimul'
const name2 ="Sakib Al Hasan"
const name3 = `Jamsed Mujumder`


/* before es6 */

// const multiline = 'first line text \n'+ 
// 'second line code \n'+
// 'third line string \n'+
// 'fourth line number'
// console.log(multiline);

// const a=20;
// const b=30;
// const result = 'sum of ' + a + ' and ' + b + ' is ' + (a+b);
// console.log(result);

/* after es6 */
// const newLine = `first line of text
// second line of code
// third line of string
// fourth line of number`
// console.log(newLine);

const a=20;
const b=30;
const result = `sum of ${a} and ${b} is ${a+b}`
console.log(result);