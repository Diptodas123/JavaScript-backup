const arr = [45,75,89,100];
let len = Number.parseInt(prompt("Enter the number of values to insert: "));
for(let i=0;i<len;i++){
    arr.push(Number(prompt(`Enter the value of ${i+1} number: `)));
}
document.write(arr);
