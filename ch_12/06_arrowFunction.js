let obj = {
    name: "Dipto",
    role: "JS Developer",
    show: function () {
        // let that = this; //to work with function expressions within a function in an object
        setTimeout(() => {  //arrow functions take "this" from its parent, this is known as "lexical this";
            console.log(this.name + " is a " + this.role);
        }, 2000)
        // setTimeout(function(){  //In, function expressions "this" means window object 
        //therefore to get rid of this problem we use "this" like this:
        // let that=this;
        //     console.log(that.name + " is a " + that.role);
        // }, 2000)
    },
}
obj.show();