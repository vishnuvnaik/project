/***************************************************************
* @Execution : default node : cmd> Bubble.js
* @Purpose : to study the functionals working.
* @description : Sorting of input array of strings
* @overview : Sorting of strings using bubble sort algorithm
* @author : Vishnu V Dev <vishnuvdev17@gmail.com>
* @version : 1.0
* @since : February 18 2020
****************************************************************/
let path = require('./bubblestringBL')
let input = require('readline-sync')
let m = input.questionInt('enter the length of the array')
try {
    let arr = [m]; let i = 0;
    while (i < m) {
        arr[i] = input.question('enter the elements ' + i)
        i++;

    }

    path.bubbleStr(arr);
} catch (error) {
    console.log(error);
}
