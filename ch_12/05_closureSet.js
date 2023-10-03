let message = "Global message";
function hello1() {
    let message = "Good Morning";
    console.log("Hello 1: " + message);
    let c = function hello2() {
        console.log("I am c " + message);
    }
    message = "hello";
    return c;
}
let c = hello1();   //here the function along with its lexical(surrounding) environment is retured combinedly
c();

//closure is a function along with its lexical environment that means its the combination of the function and its surrounding environment
let returnFunction = () => {
    let x = () => {
        let a = 1;
        console.log(a);
        let y = () => {
            let a = 2;
            console.log(a);
            let z = () => {
                let a = 3;
                console.log(a);
            }
            z();
        }
        y();
    }
    x()
}

returnFunction();