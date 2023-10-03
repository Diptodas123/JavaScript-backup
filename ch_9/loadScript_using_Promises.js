const loadScript = (src) => {
    return new Promise((resolve, reject) => {
        let script = document.createElement("script");
        script.src = src;
        document.body.appendChild(script);
        script.onload = () => {
            resolve("Script loaded successfully");
        }
        script.onerror = () => {
            reject(new Error("Failed to load the script"));
        }
    });
}
let p1 = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js");
p1.then((value) => {
    console.log(value)
}, (error) => {
    console.log(error);
});