let addBtn = document.getElementById("addBtn");
const addBox = document.querySelector(".add-box");
popupBox = document.querySelector(".popup-box");
popupTitle = popupBox.querySelector("header p");
tagDesc = popupBox.querySelector("textarea");
tagTitle = popupBox.querySelector("input");
closeIcon = popupBox.querySelector("header i");

const notes = JSON.parse(localStorage.getItem("notes") || "[]");
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let isUpdate = false,
  updateId;

addBox.addEventListener("click", () => {
  popupTitle.innerText = "Add a new Note";
  addBtn.innerText = "Add Note";
  popupBox.classList.add("show");
  document.querySelector("body").style.overflow = "hidden";
});
closeIcon.addEventListener("click", () => {
  isUpdate = false;
  popupBox.classList.remove("show");
  document.querySelector("body").style.overflow = "auto";
});
function showNotes() {
  // if (!notes) return;
  document.querySelectorAll(".notes").forEach((li) => li.remove());
  notes.forEach((notes, id) => {
    let notesDesc = notes.description.replaceAll("\n", "<br/>");
    let liTag = `<li class="notes">
                    <div class="details">
                      <p>${notes.title}</p>
                      <span>${notesDesc}</span>
                    </div>
                    <div class="bottom-content">
                      <span>${notes.date}</span>
                      <div class="settings">
                       
                        <i onclick="showMenu(this)" class="uil uil-ellipsis-h"></i>
                        <ul class="menu">
                          <li onclick="updateNote(${id},'${notes.title}','${notesDesc}')"><i class="uil uil-pen"></i>Edit</li>
                          <li onclick="deleteNote(${id})"><i class="uil uil-trash"></i>Delete</li>
                        </ul>
                      </div>
                    </div>
                </li>`;
    addBox.insertAdjacentHTML("afterend", liTag);
  });
}
showNotes();
function showMenu(elem) {
  elem.parentElement.classList.add("show");
  document.addEventListener("click", (e) => {
    if (e.target.tagName != "i" || e.target != "elem") {
      elem.parentElement.classList.remove("show");
    }
  });
}
function updateNote(noteId, title, notesDesc) {
  let description = notesDesc.replaceAll("<br/>", "\r\n");
  updateId = noteId;
  isUpdate = true;
  addBox.click();
  tagTitle.value = title;
  tagDesc.value = description;
  popupTitle.innerText = "Update a Note";
  addBtn.innerText = "Update Note";
}
function deleteNote(noteId) {
  let confirmDel = confirm("Do you want to delete this note?");
  if (!confirmDel) return;
  notes.splice(noteId, 1);
  localStorage.setItem("notes", JSON.stringify(notes));
  showNotes();
}
addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let title = tagTitle.value.trim();
  let description = tagDesc.value.trim();

  if (title || description) {
    let currentDate = new Date(),
      month = months[currentDate.getMonth()],
      day = currentDate.getDate(),
      year = currentDate.getFullYear();

    let noteInfo = { title, description, date: `${month} ${day}, ${year}` };
    if (!isUpdate) {
      notes.push(noteInfo);
    } else {
      isUpdate = false;
      notes[updateId] = noteInfo;
    }
    localStorage.setItem("notes", JSON.stringify(notes));
    showNotes();
    closeIcon.click();
  }
});
