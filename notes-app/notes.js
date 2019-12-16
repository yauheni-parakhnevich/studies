const fs = require('fs');

const fileName = 'notes.json';

const getNotes = function() {
    return 'Your notes...';
}

const addNote = function(title, body) {
    const notes = loadNotes();

    const duplicateNotes = notes.filter(function(note) {
        return note.title === title;
    });

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        });

        console.log('New note added!');
    } else {
        console.log('Note title taken!');
    }

    saveNotes(notes);
}

const saveNotes = function(notes) {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync(fileName, dataJSON);
}

const loadNotes = function() {
    try {
        const dataBuffer = fs.readFileSync(fileName);
        const data = dataBuffer.toString();
    
        return JSON.parse(data);
    } catch (e) {
        return [];
    }
}

module.exports = { 
    getNotes: getNotes,
    addNote: addNote
}