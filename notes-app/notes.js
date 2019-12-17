const fs = require('fs');
const chalk = require('chalk');

const fileName = 'notes.json';

const addNote = (title, body) => {
    const notes = loadNotes();

    const duplicateNote = notes.find((note) => note.title === title);

    debugger

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        });

        saveNotes(notes);

        console.log('New note added!');
    } else {
        console.log('Note title taken!');
    }
}

const removeNote = (title) => {
    const notes = loadNotes();

    const clearNotes = notes.filter((note) => note.title != title);

    if(clearNotes.length == notes.length) {
        console.log(chalk.red.inverse('No note found!'));
    } else {
        console.log(chalk.green.inverse('Note removed!'));
        saveNotes(clearNotes);
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync(fileName, dataJSON);
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync(fileName);
        const data = dataBuffer.toString();
    
        return JSON.parse(data);
    } catch (e) {
        return [];
    }
}

const listNotes = () => {
    const notes = loadNotes();

    console.log(chalk.inverse('Your notes'));

    notes.forEach((note) => {
        console.log(note.title);
    })

}

const readNote = (title) => {
    const notes = loadNotes();

    const note = notes.find((item) => item.title === title);

    if (note){
        console.log(chalk.blue(note.title));
        console.log(note.body);
    } else {
        console.log(chalk.red.inverse('Note not found!'));
    }
}

module.exports = { 
    removeNote: removeNote,
    listNotes: listNotes,
    addNote: addNote,
    readNote: readNote
}