const obj={
    Name:"Dipto",
    Section:"A"
};
// obj=4;      //wiil throw an error as obj is constant which can neither refer to a different obj nor refer to a different datatype
              //but its elements can be changed/updated
//for e.g.->
obj["semester"]=5;
console.log(obj); 