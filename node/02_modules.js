//const { hello, aHello } = require("./module1"); //commonjs modules

//ES6 modules
import dipto, { hello, aHello } from "./module2.js";
hello();
aHello("Dipto");
aHello("A");
dipto()