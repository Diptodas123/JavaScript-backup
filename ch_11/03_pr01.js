class ComplexNumber {
    constructor(real, imaginary) {
        this.real = real;
        this.imaginary = imaginary;
    }
    add(other) {
        console.log(`${this.real + other.real}+${this.imaginary + other.imaginary}i`);
    }
    set real(real) {
        this._real = real;
    }
    set imaginary(imaginary) {
        this._imaginary = imaginary;
    }
    get real() {
        return this._real;
    }
    get imaginary() {
        return this._imaginary;
    }
}
let c1 = new ComplexNumber(3, 2);
let c2 = new ComplexNumber(5, 4);
c1.add(c2);
console.log(c2.imaginary);