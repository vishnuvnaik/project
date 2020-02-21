/***************************************************************
* @Execution : default node : cmd> Bubble.js
* @Purpose : to study the functionals working.
* @description : Sorting of input numbers of array
* @overview : Sorting using bubble sort algorithm
* @author : Vishnu V Dev <vishnuvdev17@gmail.com>
* @version : 1.0
* @since : February 18 2020
****************************************************************/

const prime = require('./primeBL')
let input = require('readline-sync')
let num = input.questionInt('enter the number range to find the prime numbers')
console.log(isprime(num))
prime.isprime(num);