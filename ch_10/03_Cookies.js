console.log(document.cookie);
document.cookie="name=Dipto";
console.log(document.cookie);
document.cookie="id=1";
console.log(document.cookie);

//to set with special characters
let key=prompt("Enter key: ");
let value=prompt("Enter value: ");
document.cookie=`${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
console.log(document.cookie);
//to decode the encodeURIComponent, we use decodeURIComponent