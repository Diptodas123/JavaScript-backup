function average(...values){
    let sum=0;
    for(let i=0;i<values.length;i++){
        sum+=values[i];
    }
    return sum/values.length;
}
let arr=[1,2,3,4];
console.log(average(...arr));