/***************************************************************
* @Execution : default node : cmd> Flipcoin.js
* @Purpose : to study the functionals working.
* @description : Flipcoin
* @overview : Number of heads and tails while flipping a coin for n times
* @author : Vishnu V Dev <vishnuvdev17@gmail.com>
* @version : 1.0
* @since : February 18 2020
****************************************************************/

const Flipcoin = require('./FlipcoinBL')
var read =  require('readline-sync')
function flipCo()
{
let num =   read.question('enter the number of times you want to flip the coin ');
console.log(Flip(num))
return 0
Flipcoin.Flip(num)
}
flipCo()