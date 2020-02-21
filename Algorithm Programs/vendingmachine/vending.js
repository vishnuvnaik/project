/***************************************************************
* @Execution : default node : cmd> vending.js   
* @Purpose : To stduy the working of algorithm.
* @description : Output the minimum number of notes for input amount of money
* @overview : Vending machine.js
* @author : Vishnu V Dev <vishnuvdev17@gmail.com>
* @version : 1.0
* @since : February 18 2020
****************************************************************/

const vending = require('./vendingBL')
var read = require('readline-sync');
var arr = [2000, 500, 200, 100, 50, 10, 5, 2, 1]
/**
 * Declaring the array elements.
 */
var amount = read.question("Enter the amount :");
console.log(vendingMach(arr,amount))
vending.vendingMach(arr,amount)