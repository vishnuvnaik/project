/***************************************************************
 * @Execution : default node : cmd > simpleBalanced .js
 * @Purpose : input an arithmetic expression and check wheather the parantheses in the expression is balanced or not
 * @description : Takes an Arithmetic Expression where parentheses are used to order the performance of operations. 
    Ensure parentheses must appear in a balanced fashion.
 * @overview : simple balanced parantheses  
 * @author : Vishnu V Dev <vishnuvdev17@gmail.com>
 * @version : 1.0
 * @since : February 18 2020
 ****************************************************************/
const path = require('./simpleBalancedBl')
let input = require('readline-sync')
const exprsn = "(5+6)∗(7+8)/(4+3)(5+6)∗(7+8)/(4+3)"; //read the expression
path.simpleParantheses(exprsn);
return 0;