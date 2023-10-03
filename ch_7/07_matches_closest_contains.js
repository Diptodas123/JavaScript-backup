let nameInput=(document.getElementById("Name"))
console.log(nameInput.matches(".inputBox"));    //true if the id with Name is an element of inputBox class

let labels=document.getElementsByTagName("label")[0];
console.log(labels.closest(".form-conatiner")); //looks for the nearest ancestor that mathces the given css selector

let div1=document.getElementById("div1");
let h1=document.querySelector("h1");
console.log(div1.contains(h1))      //returns true as div1 contains the first h1 
