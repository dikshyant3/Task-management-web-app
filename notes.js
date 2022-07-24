let addBtn = document.getElementById("addBtn");
const addBox = document.querySelector(".add-box");
popupBox = document.querySelector(".popup-box");
popupTitle = popupBox.querySelector("header p");
tagDesc = popupBox.querySelector("textarea");
tagTitle = popupBox.querySelector("input");
closeIcon = popupBox.querySelector("header i");
const notes = JSON.parse(localStorage.getItem("notes") || "[]");
addBox.addEventListener("click", () => {
  popupTitle.innerText = "Add a new Note";
  addBtn.innerText = "Add Note";
  popupBox.classList.add("show");
  // document.querySelector("body").style.overflow = "hidden";
});
closeIcon.addEventListener("click", () => {
  popupBox.classList.remove("show");
  // document.querySelector("body").style.overflow="auto"
});
function showNotes() {
  // if (!notes) return;
  // document.querySelectorAll(".notes");
  notes.forEach((notes) => {
    let liTag = `<li class="notes">
                    <div class="details">
                      <p>${notes.title}</p>
                      <span>${notes.description}</span>
                    </div>
                    <div class="bottom-content">
                      <span>${notes.date}</span>
                      <div class="settings">
                        <i class="uil uil-ellipsis-h"></i>
                        <ul class="menu">
                          <li><i class="uil uil-pen"></i>Edit</li>
                          <li><i class="uil uil-trash"></i>Delete</li>
                        </ul>
                      </div>
                    </div>
                </li>`;
  });
}
showNotes();
