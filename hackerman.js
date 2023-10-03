let messages = [
    "Initializing Hack tool...",
    "Connecting to Facebook...",
    "Connecting to Server 1...",
    "Connection failed, Retrying...",
    "Connecting to Server 2...",
    "Connected Successfully...",
    "Username iamdipto...",
    "Trying Brute Force...",
    "20k passwords tried...",
    "Match not found...",
    "Another 20k passwords tried...",
    "Match found...",
    "Accessing Account...",
    "Hack Successful...",
];

const sleep = async (seconds) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(true);
        }, seconds * 1000);
    });
}
const showHack = async (message) => {
    await sleep(2);
    // console.log(message);
    document.getElementById("container").innerHTML += "Hackerman> " + message + "<br />"
}
(async () => {
    for (let i = 0; i < messages.length; i++) {
        await showHack(messages[i]);
    }
})();