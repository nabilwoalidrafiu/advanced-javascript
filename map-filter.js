const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];
const output = [];

// 1st way
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    const square = element * element;
    output.push(square)
}
console.log(output);

// 2nd way
function square(element) {
    const result = element * element;
    output.push(result)
    return result
    
}
numbers.map(square);
console.log(output);

// 3rd way
const result = numbers.map(function (element) {
    return element * element;
})
console.log(result);

// 3th way
const square = element => element * element;
const square = x => x * x;

// 4th way
const result = numbers.map (x => x * x);
console.log(result);

// element , index, array
numbers.map(function (element, index, array) {
    console.log(element, index, array);
})

//filter

const biggerThan6 = numbers.filter(x => x > 6);
console.log(biggerThan6);

const smallerThan5 = numbers.filter(x => x < 5);
console.log( smallerThan5);

// find (only show the first immediate value)
const findBiggerThan5 = numbers.find(x => x > 5)
console.log(findBiggerThan5);

