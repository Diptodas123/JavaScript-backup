const createTodo = async (todo) => {
    let options = {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(todo),
    }
    let response = await fetch("https://jsonplaceholder.typicode.com/posts", options);
    return response.json();
}
let todo = {
    title: "Dipto",
    body: "Hey, there!",
    userId: 77,
}
const getTodo = async (id) => {
    let p = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return p.json();
}
getTodo(2).then((value) => {
    console.log(value);
})
createTodo(todo).then((value) => {
    console.log(value)
})


//without using aysnc/await
// let options = {
//     method: "POST",
//     headers: {
//         "Content-type": "application/json"
//     },
//     body: JSON.stringify({
//         title: "Dipto",
//         body: "Hey, there!",
//         userId: 77,
//     }),
// }
// fetch("https://jsonplaceholder.typicode.com/posts", options)
//     .then((response) => {
//         return response.json();
//     })
//     .then((value) => {
//         console.log(value);
//     })