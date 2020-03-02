/***************************************************************
 * @Execution : default node : cmd > bankingCounter.js
 * @Purpose : simulate the bank cash counter 
 * @description : The user input is taken and the bank cash counter is simulated 
 * @overview : Banking cash counter
 * @author : Vishnu V Dev <vishnuvdev17@gmail.com>
 * @version : 1.0
 * @since : February 18 2020
 ****************************************************************/
const path = require('./bankingCounterBL')

function banking() {
    var input = require('readline-sync')
    
    var size = input.questionInt('enter the number of peoples ')
    path.bankingCash(size);
}
banking();