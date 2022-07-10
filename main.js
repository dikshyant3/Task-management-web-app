import NotesAPI from "./notes.js";

let addBtn = document.getElementById("notes-add");
addBtn.addEventListener("click", function (e) {
  saveNotes();
});
