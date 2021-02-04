const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// slice
const part = numbers.slice(4,7);
console.log(part);
console.log(numbers);

//splice
const remove = numbers.splice(2,3);
console.log(remove);
console.log(numbers);

// replace with slice
const replace = numbers.splice(3, 2, 101, 202, 505);
console.log(replace);
console.log(numbers);

// join
const together1 = numbers.join("");
const together2 = numbers.join(",");
const together3 = numbers.join("Bangladesh");
console.log(together1, together2, together3);