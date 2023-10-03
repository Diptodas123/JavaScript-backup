// console.dir() returns the element as an object with its properties
console.dir(document.querySelector("h1"));  //returns an element as an object with its properties

//tagname   -->   exists for element nodes
//nodeName   -->   exists for any node
console.log(document.body.firstElementChild.tagName)
console.log(document.body.firstChild.nodeName) 

//innerHTML & outerHTML property
console.log(document.getElementsByTagName("h1")[0].innerHTML);
console.log(document.getElementsByTagName("h2")[0].outerHTML);

document.getElementsByTagName("h1")[0].innerHTML="Heading 1 from js using innerHTML"
document.getElementsByTagName("h2")[0].outerHTML="<h1>Heading 2 from js using outerHTML</h1>"

//textContent   --> provides access to the text inside the element(only text, minus all tags)
console.log(document.body.textContent);     //prints all the text of the body tag

//nodeValue or data property is used to display the content of a non-element node(e.g., comment,text nodes)
console.log(document.body.firstChild.data)

//hidden property
document.getElementsByTagName("div")[1].hidden=false;
document.getElementById("element").hidden=true;