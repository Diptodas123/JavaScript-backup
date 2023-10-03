console.log("First child of <body>: ",document.body.firstChild);  
let second=document.body.firstChild.nextSibling;
console.logsecond  //next or right sibling of firstChild
console.log(second.parentElement);  //returns <body>

console.log(document.documentElement.parentElement);    //returns null as document is not an element
console.log(document.documentElement.parentNode);       //rertuns document as it's the parnetNode of <html> or documentElement
