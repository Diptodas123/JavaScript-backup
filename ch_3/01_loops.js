let obj={
    Name: "Dipto",
    Section:"A"
};
//for in loop --> is used to loop through the keys of an object
for(let k in obj){
    console.log(`${k}= ${obj[k]}`);
}

//for of loop --> is used to loop through the values of an iterable object(array, string etc.)
let arr=[1,2,3,4];
for(let value of arr){
    console.log(value);
}

for(let value of "Dipto"){
    console.log(value);
}