let form=document.getElementsByName("Form");
console.log(form);
let n=document.getElementById("Name");
n.value="Dipto";
let dob=n.nextElementSibling.nextElementSibling;
dob.value="2002-12-01";
let d=new Date();
(document.getElementById("Age")).value= Number(String(d).slice(11,15))-Number((dob.value).slice(0,4));

// document.getElementsByTagName("p"); --> returns the elements with the <p> as tag name in NodeList form


// document.querySelectorAll(".className/#id"); --> returns the elements where css selector is similar to the passed css selector
let labelsBox=document.querySelectorAll(".labelBox");
labelsBox[3].textContent="Insert your photo:";
//querySelector() returns the first element of the given css selector i.e. querySelector()===querySelectorAll()[0]

// document.getElementsByClassName("className"); --> returns the elements where className is similar to the passed class name
labelsBox=document.getElementsByClassName("labelBox");
labelsBox[3].nextElementSibling.style.borderBottom="none";  
