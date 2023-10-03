let n=5;
const arr=[];
for(let i=1;i<=n;i++){
    arr.push(i);
}
let factorial=arr.reduce((fact,element)=>{
    console.log(`${fact} x ${element}= ${fact*element}`)
    return fact*element;
});
console.log("Factorial= ",factorial);