let para = document.getElementById("para");
let btn = document.getElementById("btn");

btn.addEventListener("click", function toggleDisplay() {
    if (para.style.display == "none") {
        para.style.display = "block";
    } else {
        para.style.display = "none";
    }
});
window.addEventListener("contextmenu",(e)=>{
    e.preventDefault();
    alert("Right Click not allowed")
})

//to remove a eventListener we can use removeEventListener("event",functionName)