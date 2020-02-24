/***************************************************************
* @Execution : default node : cmd> Bubble.js
* @Purpose : to study the functionals working.
* @description : Sorting of input numbers of array
* @overview : Sorting using bubble sort algorithm
* @author : Vishnu V Dev <vishnuvdev17@gmail.com>
* @version : 1.0
* @since : February 18 2020
***************************************************************/
const Bubble = require('./BubbleBL')
let input = require('readline-sync')
let size = input.questionInt('enter the size of the array')
console.log(bubblePro(size))
return 0;
Bubble.bubblePro(size);

