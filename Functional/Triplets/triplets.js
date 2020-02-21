/**************************************************************
* @Execution : default node : cmd> triplets.js
* @Purpose : to study the functionals working.
* @description : A program with cubic running time. Read in N integers and counts the number of triples that sum to exactly 0.
* @overview : Sum of 3 entered integers is zero 
* @author : Vishnu V Dev <vishnuvdev17@gmail.com>
* @version : 1.0
* @since : February 18 2020
***************************************************************/
const triplets = require('./tripletsBL.js')
let input = require('readline-sync')
let size = input.questionInt('enter the size of array ')
console.log(findTriplets(size))
return 0;
triplets.findTriplets(size);

