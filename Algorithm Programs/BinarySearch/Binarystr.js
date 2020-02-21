const Binarystr = require('./BinarystrBL')
let input = require('readline-sync')
var arr = [];
var search = input.question("Enter the word to searched :");
const fs = require('fs')
/**
 * Reads the list of words from the file if the word is not found then it will throw error message. 
 * 
 */
fs.readFile('sample.txt', (err, data) => {
    if (err) throw err;

    arr = data.toLocaleString().split(",");
    console.log(binarySearchStrg(arr, search));
})
    
    Binarystr.binarySearchStrg(arr, search);