const arr = [1, 2, "Dipto", true, [1, 2, 3]];
arr[1] = 20;
console.log(arr);
console.log(`Value at index 2= ` + arr[2]);
console.log("typeof= " + typeof arr);
console.log(arr[10]);   //returns undefined as index 10 doesn't exist

//Methods
//length property   -->returns the length of an array
console.log("Length= " + arr.length)

//toString()    --> converts an array to a string of comma separated values
console.log(arr.toString());

//join()    --> joins all the elements using a separator
let n = [1, 7, 8, 9];
console.log(n.join(" "));

//push()    -->adds a new element at the end of the array and returns the new array length
let l = n.push(10);
console.log(`len=` + l, n);

//pop()     -->removes the last element of the array and returns popped value
let poppedValue = n.pop();
console.log("Popped value= " + poppedValue, n);

//shift()   --> removes the first element and shifts all other elements to a lower index. Returns the value that was shifted out .i.e first element
let shiftedOut = n.shift();
console.log("shiftedOut= " + shiftedOut, "n= ", n)

//unshift() --> adds a new element at the beginning and shifts all previous elements to thier corresponding adjacent index. Returns the new array length
console.log("New length= "+n.unshift(0),n);

//delete operator   --> delete oeprator is used delete an element from a specified index
// delete(n[2])
console.log(n)

//concat()  --> used to concatenate more than one array with the calling array. It returns a new array after concatenation i.e. dosn't change the original array
let n2=[2,20,30,40];
console.log(n.concat(n2,[700,450]));

//flat()    --> creates a new array with sub-array elements concatenated to a specified depth.
n=[[1,2],[3,4],[5,6],[7,8]];
console.log(n.flat());

