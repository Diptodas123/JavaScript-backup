class Password {
    constructor() {
        this.pass = "";
    }
    generatePassword(len) {
        if (len < 3) {
            console.log("Your password should be at least 3 characters long.");
        }
        else {
            let chars = "abcdefghijklmnopqrstuvwxyz";
            let numbers = "0123456789";
            let special = "!@#$%^&*";
            let i = 0;
            while (i < len) {
                this.pass += chars[Math.floor(Math.random() * chars.length)];   //Math.random() returns random values in b/w 0 to 1
                this.pass += numbers[Math.floor(Math.random() * numbers.length)];
                this.pass += special[Math.floor(Math.random() * special.length)];
                i += 3;
            }
            this.pass = this.pass.slice(0, len);
            return this.pass;
        }
    }
}
let p = new Password();
console.log(p.generatePassword(8));