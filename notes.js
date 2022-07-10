console.log("Welcome to notes app. This is notes.js");
showNotes();

// If user adds a note, add it to the localStorage
let addBtn = document.getElementById("notes-add");
addBtn.addEventListener("click", function (e) {
  let addTxt = document.getElementById("notes_body");
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.push(addTxt.value);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addTxt.value = "";
  //   console.log(notesObj);
  showNotes();
});

// Function to show elements from localStorage
function showNotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let html = "";
  notesObj.forEach(function (element, index) {
    html += `
        <div class="notes_list">
            <div class="notes_list-item notes_list-item--selected">
                <div class="notes_small-title">Lecture Notes</div>
                <div class="notes_small-body">Just Learning Javascript</div>
                <div class="notes_updated">Tuesday 9:05am</div>
            </div>
        </div>`;
  });
  let notesElm = document.getElementById("notes");
  if (notesObj.length != 0) {
    notesElm.innerHTML = html;
  } else {
    notesElm.innerHTML = `<input
    type="text"
    class="notes_title"
    placeholder="Enter a title....."
  />
  <textarea id="notes_body"> </textarea>`;
  }
}

/*
Further Features:
1. Add Title
2. Mark a note as Important
3. Separate notes by user
4. Sync and host to web server 
*/
