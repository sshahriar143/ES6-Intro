let numbers = [1,2,6,8,7,11,9,20];
// console.log (numbers[0]);
// console.log (numbers[4]);
// console.log (numbers[5]);

// by distructuring
let [a,b,c, ...d] = numbers
// console.log(a,b,c,d)

function min(nums){ 
    return Math.min(...nums) 
  }
//   console.log(min( [1,3,2 ]))

/* find on array object */
const friends = ["Moushumi", "Misha", "Manna", "mimi" , "mahiya"];
const x =friends.find(friend =>friend.length==5)
// console.log(x);

const product = {name: 'Laptop', model:'Yoga 3', price:49000, dusk: '512SSD'};
const {price} = product
console.log(price);