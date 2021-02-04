// == compares with just values though type is different.If type is different for same values , it converts in same type. 
// === compares with both type and values. 

const first = 2;
const second = "2";
if (first == second) {
    console.log("Condition is true");
}
else{
    console.log("Condition is false");
}


const first = 2;
const second = "2";
if (first === second) {
    console.log("Condition is true");
}
else{
    console.log("Condition is false");
}

// here in programming {1 == true and 0 == false}
const first = 1;
const second = true;
if (first == second) {
    console.log("Condition is true");
}
else{
    console.log("Condition is false");
}

const first = 1;
const second = true;
if (first === second) {
    console.log("Condition is true");
}
else{
    console.log("Condition is false");
}