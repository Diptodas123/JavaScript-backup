/*variables can be defined using 3 following keywords:
1. var: var variables are globally scoped + can be re-declared & updated/reassigned within its own scope + used in the early stages of js
2. let: block scoped + can be updated/reassigned but not re-declared + introduced in ECMAScript 6(ES6)
3. const: const means constant(immutable) + block scoped + can neither be redeclared nor be updated + introduced in ECMAScript 6(ES6)
*/

let a=3;
var b=4;
const c=5;
if(true){
    let a=30;
    var b=40;
    const c=50;
    console.log(a, b, c);   //30 40 50
}
console.log(a, b, c);   //3 40 5   