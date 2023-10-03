// //1.forEach(value,index,array)
// let arr = [1, 2, 3, 4, 5, 6];
// arr.forEach((element) => {
//     console.log(element * element);
// });

// //forEach() vs map()    --> both are kind of similar but, map() creates a new array by performing some operation on each element
// //2.map(value,index,array) --> creates a new array by performing some operation on each array element

// arr = [1, 2, 3];
// let a = arr.map((value, index, array) => {
//     console.log(value, index, array);
//     return value + index;
// });
// console.log(a);

// //3.filter(value,index,array) --> creates a new array with array elements that satisfy a condition i.e. if evaluates true
// let age = [12, 22, 18, 19, 50];
// let over18 = age.filter((value, index, array) => {
//     return value > 18;
// });
// console.log(over18);

// 4.reduce(initialValue / perviousValue, currentValue, index, array)-- > reduces an array to a single value(doesn't modify the original array). Returns a value only
const add = (a, b) => {
    console.log(`${a}+${b}= ${a + b}`);
    return a + b;
}
let n = [1, 8, 7, 11];
let sum = n.reduce(add);
console.log(sum);