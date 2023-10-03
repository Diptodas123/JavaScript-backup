function sum(v1, v2, v3) {
    return v1 + v2 + v3;
}
let arr = [1, 2, 3];
let obj = { ...arr };
console.log(obj);

console.log(sum(...arr));

let obj2 = {
    name: "Dipto",
    company: "ABC",
    age: "44",
}
console.log({ ...obj2, company: "XYZ" });   //first it reads all the values of obj2 and then updates the value of passed key-value pair
console.log({ ...obj2, company: "XYZ", name: "Rahul" });
// console.log({ company: "XYZ",...obj2 }); This will not update the values of obj2
