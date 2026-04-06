const notesContainer = document.querySelector(".notesContainer");
const createBtn = document.querySelector(".addNoteBtn");
let notes = document.querySelectorAll(".inputBox");

// Load notes from local storage
function loadNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes") || "";
}

// Local Storage Update
function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

// Load notes on page load
loadNotes();

// Add new note
createBtn.addEventListener("click", () => {
    let noteWrapper = document.createElement("div");
    let inputBox = document.createElement("p");
    let img = document.createElement("img");

    noteWrapper.className = "note";

    inputBox.className = "inputBox";
    inputBox.setAttribute("contenteditable", "true");

    img.src = "Images/delete.png";
    img.className = "deleteIcon";

    noteWrapper.appendChild(inputBox);
    noteWrapper.appendChild(img);

    notesContainer.appendChild(noteWrapper);

    updateStorage();
})

// Delete note
notesContainer.addEventListener("click", function(e) {
    if (e.target.classList.contains("deleteIcon")) {
        e.target.parentElement.remove();
        updateStorage();
    }
});

// Save on typing
notesContainer.addEventListener("input", function() {
    updateStorage();
});

