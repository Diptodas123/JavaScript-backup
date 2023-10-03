let div = document.getElementById("box");
let input = document.getElementById("colorName");
let submit = document.querySelector("input[type='button']");
submit.onclick = () => {
    let colorName = (input.value).toLowerCase();
    div.style.backgroundColor = colorName;
}
