try {
    let age = Number(window.prompt("Enter your age: "));
    if (age > 120) {
        throw new ReferenceError("This is probably not true");
    }

    // throw new Error("Some error");
} catch (error) {
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
}
console.log("Script is still running");