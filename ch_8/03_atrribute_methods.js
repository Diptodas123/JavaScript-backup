let div1 = document.getElementById("div1");
console.log((div1.nextElementSibling).hasAttribute("id"));
div1.nextElementSibling.setAttribute("id", "div2");
console.log(div1.nextElementSibling.getAttribute("id"))
console.log(div1.attributes)
div1.removeAttribute("class")
console.log(div1.hasAttribute("class")) //after deletion it will return false

//data-* attribute is an custom attribue available in "dataset" property
console.log(div1.getAttribute("data-game"))
console.log(div1.dataset)   //returns all the custom properties of div1
console.log(div1.dataset.game)  //to access a particular attribute from the dataset property

console.log(document.querySelector(`[data-game="game1"]`))  //to navigate an element through custom property