const notesContainer = document.querySelector(".notesContainer");
const createBtn = document.querySelector(".addNoteBtn");
let notes = document.querySelectorAll(".inputBox");

createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "inputBox";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "Images/delete.png";
    img.className = "deleteIcon";
    inputBox.appendChild(img);
    notesContainer.appendChild(inputBox);

    img.addEventListener("click", () => {
        notesContainer.removeChild(inputBox);
    })
})