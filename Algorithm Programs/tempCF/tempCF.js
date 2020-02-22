/***************************************************************
* @Execution : default node : cmd> tempCF.js
* @Purpose : to study the working of algorithm based programs
* @description : Input the temperature and convert it from celsius to fahrenheit and vice versa
* @overview : Display the converted temperature as output
* @author : Vishnu V Dev <vishnuvdev17@gmail.com>
* @version : 1.0
* @since : February 18 2020
****************************************************************/
const tempCF = require('./tempCFBL')
let input = require('readline-sync')
let temp = input.questionInt('enter the temperature ');
console.log(temP(temp))
return 0;
tempCF.temP(temp)
