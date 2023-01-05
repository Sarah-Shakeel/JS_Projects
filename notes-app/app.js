const chalk = require('chalk');
const yargs = require('yargs');
const getNotes = require('./notes.js');


let func = getNotes();
console.log(func);

/*i love you you love me, we r a happy family, with a great big hug and a kiss from me to you,
wont you say you love me too. do you love me enough, no he loved me enough to let me go */

// console.log(chalk.gray('Success!'));
// console.log(chalk.blue.inverse.bold('Success!'));
// console.log(chalk.green('Success!'));
// console.log(chalk.yellow('Success!'));


//const validator = require('validator');
// console.log(validator.isEmail('sarahshe.com'));
// console.log(validator.isURL('sarahshe.com'));


// using the yargs command in node.js
yargs.version('1.1.1');


//Create add command
yargs.command({
    command: 'add',
    describe: 'Adding a note!',
    handler: function() {
        console.log('Adding a new note!');
    }
})
//Create remove command
yargs.command({
    command: 'remove',
    describe: 'Removing a note!',
    handler: function() {
        console.log('Removing a new note!');
    }
})
//Create read command
yargs.command({
    command: 'read',
    describe: 'Reading a note!',
    handler: function() {
        console.log('Reading a new note!');
    }
})
//Create list command
yargs.command({
    command: 'list',
    describe: 'Listing of a note!',
    handler: function() {
        console.log('listing a new note!');
    }
})
console.log(yargs.argv);