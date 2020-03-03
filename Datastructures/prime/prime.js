/***************************************************************
 * @Execution : default node : cmd> prime.js
 * @Purpose : To print the prime numbers within a range 
 * @description : To display the prime numbers within a range
 * @overview : Prime numbers
 * @author : Vishnu V Dev <vishnuvdev17@gmail.com>
 * @version : 1.0
 * @since : February 18 2020
 ****************************************************************/
const path = require('./primeBL')
let arr = new Array(10);
path.findPrime(arr);