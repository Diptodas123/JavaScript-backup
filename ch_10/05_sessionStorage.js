sessionStorage.setItem("name", "Dipto");
console.log(`The value at ${sessionStorage.key(1)} is ` + sessionStorage.getItem("name"));

window.onstorage = (e) => {
    console.log("storage updated/changed");
    console.log(e);
}
