// truthy vs falsy
// falsy values
// 0
// ""
// undefined
// null
// NaN

// truthy values
// "0", " ","false" {}, [], "String er vitor kichu thakley truth"
const age = 0;
// let age;
if (age) {
    console.log("Condition true. age != 0");
}
else {
    console.log("Condition False. age = 0/ undefined/ null/ NaN");
    // if age = 0 or undefined or null, then it will show false otherwise truth
}


const name = "Nabil";
if (name.length) {
    console.log("Condition true.Vitore kichu ache ");
}
else {
    console.log("Condition False. Empty String or undefined or null or NaN");
    // if name = ""/(empty string) or undefined or null or NaN then it will show false otherwise truth
}

let num = 0;
if (num || num == 0) {
    console.log("Condition is truth");
}
else{
    console.log("Condition is false");
}