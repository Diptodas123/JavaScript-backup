let key = prompt("Enter the key you want to set");
let value = prompt("Enter the value you want to set");
localStorage.setItem(key, value);
console.log(`The value at ${key} is ${localStorage.getItem(key)}`);
if (key == "blue" || key == "red") {
    localStorage.removeItem(key);
}
console.log(localStorage.key(0));
console.log(localStorage.length)