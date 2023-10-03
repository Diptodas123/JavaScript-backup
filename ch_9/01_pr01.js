const loadScipt = (src) => {
    return new Promise((resolve, reject) => {
        let script = document.createElement("script");
        script.src = src;
        document.head.appendChild(script);
        script.onload = () => {
            resolve("Script has been loaded");
        }
        script.onerror = () => {
            reject("Failed to load the script");
        }
    });
}
loadScipt("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js")
    .then((value) => {
        console.log(value);
    }, (error) => {
        console.log(error);
    });