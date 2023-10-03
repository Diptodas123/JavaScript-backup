class Employee {
    constructor(name, skill) {
        this.name = name;
        this.skill = skill;
    }
    login() {
        console.log(`Employee has logged in`);
    }
    logout() {
        console.log(`Employee has logged out`);
    }
    requestLeaves(n) {
        console.log(`Employee has requested ${n} leaves`);
    }
}
class Programmer extends Employee {
    constructor(name, skill, ...language) {
        super(name, skill);
        this.language = language;
    }
    requestLeaves(n) {
        super.requestLeaves(n + 1);
        console.log(`One extra is given`);
    }
    requestCoffee(n) {
        console.log(`Employee has requested ${n} coffee`);
    }
}
let e1 = new Employee("A", "Marketing");
let p1 = new Programmer("Dipto", "Development", "Java", "JavaScript");
console.log(p1.language);