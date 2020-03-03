/***************************************************************
 * @Execution : default node : cmd> orderedList.js
 * @Purpose : To print the ordered list read from the file 
 * @description : inputs the data from the file and searches for a user inputted number if the number is present it is removed, if the word is not present the word is added
 * @overview : ordered list  
 * @author : Vishnu V Dev <vishnuvdev17@gmail.com>
 * @version : 1.0
 * @since : February 18 2020
 ****************************************************************/
const path = require('./orderedListBL')
const fs = require('fs')
let files = fs.readFileSync('numbers.txt', 'utf8');
path.ordered(files.split(','));