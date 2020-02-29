/***************************************************************
 * @Execution : default node : cmd > calender.js
 * @Purpose : Display the calendar
 * @description : input the desired month and year to print the calendar.
 * @overview : Displays the calendar of desired month
 * @author : Vishnu V Dev <vishnuvdev17@gmail.com>
 * @version : 1.0
 * @since : February 18 2020
 ****************************************************************/
const path = require('./calenderBl')
var input = require('readline-sync')
let month = input.questionInt('enter the month :- ')
let year = input.questionInt('enter the year ')
path.calendarDisplay(month, year);