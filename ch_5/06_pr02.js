const arr = [45, 75, 89, 100];
let value;
do {
    value = Number.parseInt(prompt("Enter the number to insert: "));
    arr.push(value);
} while (value != 0);
document.write(arr);