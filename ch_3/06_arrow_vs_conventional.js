//arguments obj
function f1(a,b){
    console.log(arguments[0]);
}
const f1Arrow=(a,b)=>{
    console.log(arguments); //arguments obj is not there in arrow functions
}
f1(10,11);
// f1Arrow(10,11);  -->will throw an error

//this keyword
class A{
    constructor(name,section){
        this.name=name;
        this.section=section
    }
    f2() {
        console.log(this.name);
    }
    f2Arrow=()=>{
        console.log(this.name);
    }
}
const a=new A("Dipto","A");
a.f2();
a.f2Arrow();    //it throws no error as 'this' contains the 'a' obj but this can't be accessed through an arrow function

//new keyword --> functions are both constructible(i.e. can be called using new keyword as object) & callable
//but arrow functions are only callable and not constructible(i.e. can't be called using new keyword as object)
console.log(new f1(10,11));
// console.log(new f1Arrow(10,11));     //throws an error

// arrow functions can't be used as constructor as arrow functions don't have 'this' concept

