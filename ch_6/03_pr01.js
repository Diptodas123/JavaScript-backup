let bool = true;
while (bool) {
    let age = Number.parseInt(prompt("Enter your age: "));
    if (age > 18) {
        alert("You can drive!");
    }else if(age<0){
        console.error("Age can't be less than 0");
        break;
    } else {
        alert("You can't drive!");
    }
    bool=confirm("Do you want to play it again?");
}