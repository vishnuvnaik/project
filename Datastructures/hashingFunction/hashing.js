/***************************************************************
 * @Execution : default node : cmd > hashing.js
 * @Purpose : Study of hashing functions(data structures)
 * @description : Search a number from the file using hashing functions
 * @overview : hashing Functions
 * @author : Vishnu V Dev <vishnuvdev17@gmail.com>
 * @version : 1.0
 * @since : February 18 2020
 ****************************************************************/
const path = require('./hashingBL')
const fs = require('fs')
let files = fs.readFileSync('number.txt', 'utf8');
path.hashingFunction(files.split(','));