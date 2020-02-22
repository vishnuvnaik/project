/***************************************************************
* @Execution : default node : cmd> doW.js
* @Purpose : to study the working of algorithm based programs
* @description : Inputting the dates and output the respected day of week
* @overview : Display the day of week as output
* @author : Vishnu V Dev <vishnuvdev17@gmail.com>
* @version : 1.0
* @since : February 18 2020
****************************************************************/
const doW = require('./dowBL')
let input = require('readline-sync')
let m = input.questionInt('enter the month ');
let d = input.questionInt('enter the date');
let y = input.questionInt('enter the year ');
console.log(dayofWeek(m, d, y))
return 0;
doW.dayofWeek(m, d, y);