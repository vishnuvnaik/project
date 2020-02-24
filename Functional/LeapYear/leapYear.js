/**************************************************************
* @Execution : default node : cmd> leapYear.js
* @Purpose : to study the functionals working.
* @description : Input the year and check wheather the enetered year is a leap year or not.
* @overview : Leap year or not a leap year.
* @author : Vishnu V Dev <vishnuvdev17@gmail.com>
* @version : 1.0
* @since : February 18 2020
***************************************************************/
const leapYear = require('./leapYearBl')
let input = require('readline-sync')
let year = input.questionInt("enter the year to check wheather leap year or not");
console.log(leapYearmain(year))
