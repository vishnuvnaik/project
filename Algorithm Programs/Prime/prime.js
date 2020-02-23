/***************************************************************
* @Execution : default node : cmd> Prime.js
* @Purpose : to study the algorithms working.
* @description : Input the range and display the prime numbers within that range
* @overview : Prime number display
* @author : Vishnu V Dev <vishnuvdev17@gmail.com>
* @version : 1.0
* @since : February 18 2020
****************************************************************/

const prime = require('./primeBL')
let input = require('readline-sync')
let num = input.questionInt('enter the number range to find the prime numbers')
console.log(isprime(num))
prime.isprime(num);