function stopwatch() {
    let count = 0;
    return function () {
        count ++ ;
        return count;
    }
}
const count1 = stopwatch();
console.log(count1());
console.log(count1());
console.log(count1());
console.log(count1());

const count2 = stopwatch();
console.log(count2());
console.log(count2());
console.log(count2());
console.log(count2());

//again calling count1
console.log(count1());
console.log(count1());
console.log(count1());

