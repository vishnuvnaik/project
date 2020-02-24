/***************************************************************
* @Execution : default node : cmd> mmergeSortmain.js
* @Purpose : to study the working of algorithm based programs
* @description : Sort the enetered strings through the array by merge sort algorithm
* @overview : Display the sorted elements as output
* @author : Vishnu V Dev <vishnuvdev17@gmail.com>
* @version : 1.0
* @since : February 18 2020
****************************************************************/
let path = require('./mergeSortBL')
let input = require('readline-sync')
let m = input.questionInt('enter the length of the array')
try {
    let arr = [m]; let i = 0;
    while (i < m) {
        arr[i] = input.question('enter the elements ')
        i++;

    }

    path.mergeSort(arr);
} catch (error) {
    console.log(error);
}
