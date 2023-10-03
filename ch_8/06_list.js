let li=document.createElement("li");
li.textContent="Jackfruit";
let ul=document.getElementById("ul-list");
ul.classList.add("cyan");   //to add more than one class to an element
console.log(ul.classList)   //to display all classes of an element
ul.appendChild(li);
li.textContent="Guava";
ul.prepend(li);
li.classList.add("red");

li.classList.toggle("cyan");    //adds the class if it doesn't exist, otherwise removes it
ul.classList.remove("cyan");    //to remove a class from an element

console.log(ul.classList.contains("cyan"));  //checks whether the passed class is associated with the element or not

let div = document.createElement("div");
let input = document.createElement("input");
input.setAttribute("type", "submit");
input.setAttribute("id", "submit");

div.appendChild(input);
console.log(div);
document.body.append(div);

document.getElementById("submit").onclick = () => {
    document.body.classList.toggle("cyan");
}
