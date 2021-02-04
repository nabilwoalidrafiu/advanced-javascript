// // undefined
let bird;
console.log(bird);

function addNum(num1, num2) {
    console.log(num1 + num2);
    return 
    // return na korle undefined show korbe. ki return korte hobe tao bole dite hobe.
}
const result = addNum(50, 60);
console.log(result);

function add(num3, num4){
    console.log(num3, num4);
}
const result2 = add(12); /* num4/jekono parameter er value na likhle undefined show korbe*/
console.log(result2);

const student = {name : "Faisal", phone:1980747}
console.log(student.subject);/*object e nai emon value dekhte chaile undefined show korbe*/

let fun = undefined;
console.log(undefined);

let ages = [2, 5, 8, 9];
console.log(ages[23]);/*length er baire output chaile undefined show korbe */