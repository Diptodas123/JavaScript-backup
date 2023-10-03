let promise=new Promise(function(resolve,reject){
    alert("hello inside promise");
    resolve(56);
});
console.log("Hello one");
setTimeout(()=>{
    console.log("Hello two after 2 seconds");
},2000);
console.log("Hello three two"); 
console.log(promise);