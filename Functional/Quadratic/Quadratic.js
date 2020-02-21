/***************************************************************
* @Execution : default node : cmd> Quadratic.js
* @Purpose : to study the functionals working.
* @description : Quadratic Equation
* @overview : Solve the given quadratic equation
* @author : Vishnu V Dev <vishnuvdev17@gmail.com>
* @version : 1.0
* @since : February 18 2020
****************************************************************/

const Quadratic=require('./QuadraticBL')
let input = require('readline-sync')
function quadEqn()
{
let a = input.questionInt("enter the value of a :- ");
let b = input.questionInt("enter the value of b :- ");
let c = input.questionInt("enter the value of c :- ");
console.log(quad(a,b,c));
return 0;
Quadratic.quad(n);
}
quadEqn()