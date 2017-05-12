const fs = require('fs');

let addNote = (title, body) => {
  let newNote = {
    title,
    body
  };
  let notes = [];
  fs.readFile('notes.json', 'utf8', (err, data) => {
    if (err) {
      console.log(err);
      process.exit(1);
    }
    notes.push(data);
    let newNoteString = JSON.stringify(newNote);
    fs.appendFile('notes.json', newNoteString, 'utf8', (err) => {
      if (err) {
        console.log(err);
        process.exit(1);
      }
      console.log("Added note successfully");
    });
  });
};

let removeNote = id => {
  console.log(`Removing note with id ${id}`);
};

let listNotes = () => {
  console.log(`Listing all notes`);
};

let viewNote = id => {
  console.log(`Viewing the note with id ${id}`);
};

module.exports = {
  addNote,
  removeNote,
  listNotes,
  viewNote
};
