const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const note = require('./note');

command = process.argv[2];
ycommand = yargs.argv;
if (!command) {
  console.log("Please enter a command");
  process.exit(1);
}

if (command === 'add') {
  if (ycommand.title && ycommand.body)
    note.addNote(ycommand.title, ycommand.body);
  else
    console.log("Enter valid arguments");
} else if (command === 'remove') {
  if (ycommand.id)
    note.removeNote(ycommand.id);
  else
    console.log("Enter valid arguments");
} else if (command === 'list') {
  note.listNotes();
} else if (command === 'read') {
  if (ycommand.id)
    note.viewNote(ycommand.id);
  else
    console.log("Enter valid arguments");
} else {
  console.log("Enter a valid command");
}
