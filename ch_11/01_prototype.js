let a = {
    name: "Dipto",
    language: "JavaScript",
    run: () => {
        alert("self run method")
    }
};
let p = {
    run: () => {
        alert("run method");
    }
}
a.__proto__ = p;
p.__proto__ = {
    lastName: "Das",
}
console.log(a);
a.run()
console.log(a.lastName)