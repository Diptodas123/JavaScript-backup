var count = 1;

const addNote = () => {
    let span = document.createElement("span");

    let input = document.createElement("input");
    input.setAttribute("type", "text");
    input.placeholder = "Enter your note...";
    input.style.width = "80%";
    span.appendChild(input);

    let button = document.createElement("button");
    button.textContent = "Submit";
    button.style.backgroundColor = "blue";
    button.style.color = "white";
    button.style.border = "none";
    button.style.padding = "5px 10px";
    button.style.marginLeft = "10px";

    button.addEventListener("click", () => {
        let noteContent = input.value;
        if (noteContent.trim() !== "") {
            localStorage.setItem(`note${count}`, noteContent);
            count++;
            input.value = "";
        }
    });

    span.appendChild(button);
    span.style.border = "1px solid black";
    span.style.display = "block";

    document.getElementById("notes-area").appendChild(span);
};
const showNotes = () => {
    const notesArea = document.getElementById("notes-area");

    // Clear any existing notes displayed
    notesArea.innerHTML = "";

    for (let i = 1; i <= localStorage.length; i++) {
        const noteKey = localStorage.getItem(`note${i}`);

        // Create a div element to display the note key
        const noteKeyDiv = document.createElement("div");
        noteKeyDiv.textContent = noteKey;

        // Style the div (optional)
        noteKeyDiv.style.marginBottom = "10px"; // Add spacing between keys

        // Append the note key div to the main container
        notesArea.appendChild(noteKeyDiv);
    }
}
