/*
Types of datatypes- i> primitive -7 types
                   ii> Non-primitive(reference)
                   Total datatypes in js=8
i>abbreviation to remember the primitive datatypes- nn ss bb u
where, n=number
       n=Null
       s=Symbol
       s=String
       b=Boolean
       b=BigInt
       u=Undefined

ii>Non-primitive- Object(Object+Array+Date)
*/

//e.g. of primitive datatypes
let a=15;
let b=null;
let c="Dipto";
let d=Symbol("I am a symbol value");
let e=BigInt("576")+BigInt("4");
let f=true;
let g=undefined;    //no need to write undefined explicitly

//typeof operator is used to determine the datatype/class of an variable/object
document.write(e+"<br>")
document.write(typeof g)

//e.g. of non-primitive datatype i.e. object

const obj= {
    "Harry":true,
    1:[78,56],
    "Dipto":false,
}
console.log(obj[1]);
console.log(obj["Dipto"]);