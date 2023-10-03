let a=document.body;
console.log(a.firstElementChild);   //returns the first element child of body
console.log(a.firstElementChild.nextElementSibling);    //returns the next element child of the first element child of body
console.log(a.lastElementChild)     //returns the last element child of body
console.log(a.lastElementChild.previousElementSibling)  //returns the previous element child of the last element child of body
console.log(a.firstElementChild.firstElementChild)