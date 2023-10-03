//common js modules
const hello = () => {
    console.log("Hello World");
}
const aHello = (name) => {
    console.log("Hello " + name);
}
module.exports = { hello, aHello };//same as below line
// module.exports = {hello:hello,aHello:aHello};