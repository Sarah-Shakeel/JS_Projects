let a = 10;
let b = 20;
console.log(a*b);


const file = require('fs');

//file.writeFileSync('notes.txt','Hi, this is Sarah here trying the module from udemy course :)');

file.appendFileSync('notes.txt',' I am just adding some more text');


