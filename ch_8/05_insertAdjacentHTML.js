let newDiv=document.getElementsByClassName("new-container")[0];
let newElement=document.createElement("p");
newElement.textContent="beforebegin"
newDiv.insertAdjacentElement("beforebegin",newElement);     //to insert an element
newDiv.insertAdjacentHTML("beforeend","<p>beforeend</p>")   //to insert HTML 
newDiv.insertAdjacentHTML("afterbegin","<p>afterbegin</p>")
newDiv.insertAdjacentHTML("afterend","<p>afterend</p>")

// insertAdjacentText() //new insert a text

//to remove an element  -->elem.remove() is used
let p=document.createElement("p");
p.textContent="Created element";
newDiv.appendChild(p);
console.log(p);

p.remove();