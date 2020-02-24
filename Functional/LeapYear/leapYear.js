/**************************************************************
* @Execution : default node : cmd> triplets.js
* @Purpose : to study the functionals working.
* @description : A program with cubic running time. Read in N integers and counts the number of triples that sum to exactly 0.
* @overview : Sum of 3 entered integers is zero 
* @author : Vishnu V Dev <vishnuvdev17@gmail.com>
* @version : 1.0
* @since : February 18 2020
***************************************************************/
const leapYear = require('./leapYearBl')
let input = require('readline-sync')
let year = input.questionInt("enter the year to check wheather leap year or not");
console.log(leapYearmain(year))
