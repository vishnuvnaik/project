/***************************************************************
* @Execution : default node : cmd> Binarystr.js
* @Purpose : to study the algorithms working.
* @description : Searching of user inputted word from a file
* @overview : Searching using binary search algorithm
* @author : Vishnu V Dev <vishnuvdev17@gmail.com>
* @version : 1.0
* @since : February 18 2020
****************************************************************/

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