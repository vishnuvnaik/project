/***************************************************************
* @Execution : default node : cmd> insertionInt.js
* @Purpose : to study the working of algorithm.
* @description : Sorting of input numbers of array
* @overview : Sorting using insertion sort algorithm
* @author : Vishnu V Dev <vishnuvdev17@gmail.com>
* @version : 1.0
* @since : February 18 2020
****************************************************************/
const insertionInt = require('./insertionintBL')
let input = require('readline-sync')
let size = input.questionInt('enter the size of the array')
console.log(insertionPro(size))
return 0;
insertionInt.insertionPro(size);
