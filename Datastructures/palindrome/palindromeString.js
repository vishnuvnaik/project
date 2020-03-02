/***************************************************************
 * @Execution : default node : cmd > palindromeString.js
 * @Purpose : Check wheather the string is palindrome or not
 * @description : The program checks wheather the  inputted string is a palindrome or not using deque.
 * @overview : PalindromeString
 * @author : Vishnu V Dev <vishnuvdev17@gmail.com>
 * @version : 1.0
 * @since : February 18 2020
 ****************************************************************/
const path = require('./palindromeStringBL')
var input = require('readline-sync')
var str = input.question(' Enter the string to check for palindrome ')
path.palindromString(str);