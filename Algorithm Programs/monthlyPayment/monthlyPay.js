/***************************************************************
* @Execution : default node : cmd> monthlyPay.js
* @Purpose : to study the working of algorithm based programs
* @description : Input the principle,rate and time period or year
* @overview : Display the monthly payment
* @author : Vishnu V Dev <vishnuvdev17@gmail.com>
* @version : 1.0
* @since : February 18 2020
****************************************************************/
const monthlyPay = require('./monthlyPayBL')
let input = require('readline-sync')
let p = input.questionInt('enter trhe princple amount ')
let y = input.questionInt('enter the year of period ')
let r = input.questionFloat('enter the rate of interest ')
console.log(monPay(p,y,r))
return 0;
