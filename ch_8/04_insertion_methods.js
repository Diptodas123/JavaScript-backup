let a=document.getElementsByTagName("div")[0];

let div=document.createElement("div");
div.innerHTML="<h1>Hello World</h1>";
div.setAttribute("class","new-container")

//append vs appendChild --> using appendChild(), only element nodes can be added, 
//on the other hand append() can append nodes other than element nodes as well. e.g. comment, text etc.

// a.appendChild(div);     //appends the created element at the end as a child  node
// a.append(div);
// a.prepend(div)     //inserts the created element at the beginning(but within that element)

// a.before(div)     //inserts the created element before the calling element(outside that element)
// a.after(div)     //inserts the created element after the calling element(outside that element)

// a.replaceWith(div)  //replaces the calling element with the argumented element i.e. deletes the previous elem and replaces that by the new element

a.append(div);

//creating a input element
let inputBox=document.createElement("input");
let labelBox=document.createElement("label");
labelBox.textContent="Input:"
labelBox.setAttribute("for","input1")
inputBox.setAttribute("id","input1");
inputBox.setAttribute("type","text");
inputBox.setAttribute("placeholder","input");
div.appendChild(labelBox)
div.appendChild(inputBox);