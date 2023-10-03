//assert() -->asserts a condition
console.assert(10>15);  

//log() --> outputs a message to the console
console.log(69);    

//table()  --> displays a tabular data
obj={
    Name:"Dipto",
    Section:"A",
    Year:"3rd"
}
console.table(obj);    
const arr=[1,2,3,4];
console.table(arr);

//warn() --> used for warnings
console.warn("This is a warning");

//error()   --> used for errors
console.error("This is an error");

//info()    -->used for special information (similar to log())
console.info("This is an info");

//clear()   -->used to clear the console
// console.clear()

//time()    --> used to start a timer, for testing purpose
//timeEnd() --> used to end a timer, for testing purpose 
console.time("p1");

for(let i=0;i<500;i++){
    //code
}
console.timeEnd("p1");  //returns the time of execution of the above for loop