/***************************************************************
* @Execution : default node : cmd> harmonic.js
* @Purpose : to study the functionals working.
* @description : Harmonic numbers
* @overview : Sum of harmonic number series
* @author : Vishnu V Dev <vishnuvdev17@gmail.com>
* @version : 1.0
* @since : February 18 2020
****************************************************************/

const Harmonic = require('./harmonicBL')
let input = require('readline-sync')
function harmonicNum() {
    let N = input.questionInt('enter the value of N')
    console.log(nthHarmonic(N))
    return 0
    Harmonic.nthHarmonic(N)
}
harmonicNum()