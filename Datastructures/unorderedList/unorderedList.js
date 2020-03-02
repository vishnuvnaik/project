/***************************************************************
 * @Execution : default node : cmd> unorderedList.js
 * @Purpose : To print the unordered list read from the file 
 * @description : inputs the data from the file and searches for a user inputted word if the word ispresent it is removed, if the word is not present the word is added
 * @overview : Unordered list  
 * @author : Vishnu V Dev <vishnuvdev17@gmail.com>
 * @version : 1.0
 * @since : February 18 2020
 ****************************************************************/

const path = require('./unorderedListBL')
var input = require('readline-sync')
var fs = require('fs')
var arr = [];

var files = fs.readFileSync('Sample.txt', 'utf8', function (err, data) {
    if (err) {
        console.log(error)
    } else {
        return data;
    }
});

var splitfileR = files.split(' ');
path.unOrdered(splitfileR)