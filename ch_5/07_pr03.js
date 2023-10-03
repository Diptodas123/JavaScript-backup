const arr=[1,20,30,45,60,70,10];
let result=arr.filter((value)=>{
    return value%10==0;
});
console.log(result);