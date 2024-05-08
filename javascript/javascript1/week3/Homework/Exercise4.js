// **************Smart-ease - Back to the basics!********************

// Save a note

const notes = [];

function saveNote(content, id, reminder = null) {
  notes.push({ content: content, id: id, reminder: reminder });
}

saveNote("Pick up groceries", 1, new Date(2024, 4, 10, 12, 0));
saveNote("Do laundry", 2, new Date(2024, 4, 9, 12, 0));

console.log(notes); // [{content: 'Pick up groceries', id: 1}, {content: 'Do laundry', id: 2}]

// Get a note

function getNote(id) {
  if (typeof id !== "number" || isNaN(id)) {
    console.log("Error: Please provide a valid id.");
    return;
  }

  for (let i = 0; i < notes.length; i++) {
    if (notes[i].id === id) {
      return notes[i];
    }
  }
  console.log("Error: No note found with the specified id.");
}

const firstNote = getNote(1);
console.log(firstNote); // {content: 'Pick up groceries', id: 1}

// Log out notes

function logOutNotesFormatted() {
  for (let i = 0; i < notes.length; i++) {
    console.log(
      `The note with id: ${notes[i].id}, has the following note text: "${notes[i].content}"`
    );
  }
}

logOutNotesFormatted(); // should log out the text below

// The note with id: 1, has the following note text: Pick up groceries
// The note with id: 2, has the following note text: Do laundry

// Unique feature

// 1.Adding a reminder property to notes, and then iterate on it.
