//1.function declaration
function func(a,b){
    return a+b;
}

//2.arrow function
const arrowfunc=(a,b)=>{
    return a+b;
}

//3.function expression
const funcExpression=function(a,b){
    return a+b;
}

console.log(func(10,15));
console.log(arrowfunc(10,15));
console.log(funcExpression(10,15));

