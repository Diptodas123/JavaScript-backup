class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    work() {
        console.log("Working...");
    }
}
class Student extends Human {
    constructor(name, age, currentClass) {
        super(name, age);
        this.currentClass = currentClass;
    }
    work() {
        console.log("Studying...");
    }
}
let h = new Human();
let s = new Student();
h.work();
s.work();

console.log(s instanceof Human);