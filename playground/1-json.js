const fs = require('fs');

// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday'
// }

// const bookJSON = JSON.stringify(book);

// fs.writeFileSync('1-json.json', bookJSON);

// const dataBuffer = fs.readFileSync('1-json.json');
// const dataJSON = dataBuffer.toString();

// const data = JSON.parse(dataJSON);

// console.log(data.author);

const dataBuffer = fs.readFileSync('1-json.json');
let dataJSON = dataBuffer.toString();

const data = JSON.parse(dataJSON);

data.name = 'Eugene';
data.age = 41;

dataJSON = JSON.stringify(data);

fs.writeFileSync('1-json.json', dataJSON);