/***************************************************************
 * @Execution : default node : cmd > bankingCounter.js
 * @Purpose : simulate the bank cash counter 
 * @description : The user input is taken and the bank cash counter is simulated 
 * @overview : Banking cash counter
 * @author : Vishnu V Dev <vishnuvdev17@gmail.com>
 * @version : 1.0
 * @since : February 18 2020
 ****************************************************************/
const path = require('./palindromeStringBL')
var input = require('readline-sync')
var str = input.question(' Enter the string to check for palindrome ')
path.palindromString(str);