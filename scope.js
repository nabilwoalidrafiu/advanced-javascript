// Scope =>1.Local Scope. 2.Global Scope
//  var=function scoped has a large scope.but 
//  const and let= block scoped has little scope 
let bonus = 50;
function sum(first, second) {
    let result = first + second + bonus;
    console.log(result);/**here, result is local. you cannot use it globally (outside of this function)  */
    

    if (result>70) {
        let mood = "happy";
        console.log(mood);
    }
    // console.log(mood);/**mood has local scope */
    return result;
}
const output = sum(10, 20);
console.log(bonus);/**here, bonus is global. you can use bonus, wherever you want  */
// console.log(result);/**it is not possible */

console.log(day);/**using let here will give error */
let day = "Wednesday"

console.log(days);/**using var here will give undefined */
var days = "Friday"
