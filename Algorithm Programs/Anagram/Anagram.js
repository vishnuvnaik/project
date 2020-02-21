/***************************************************************
* @Execution : default node : cmd> Anagram.js
* @Purpose : to study the functionals working.
* @description : Anagram Detection
* @overview : Check wheather the inputted strings are anagram or not
* @author : Vishnu V Dev <vishnuvdev17@gmail.com>
* @version : 1.0
* @since : February 18 2020
****************************************************************/

const Anagram = require('./AnagramBL')
let input = require('readline-sync')
function anagramdetect() {
    let str1 = input.question('enter the string 1');
    let str2 = input.question('enter the string 2');
    console.log(anagramPro(str1, str2))
    return (0)
    Anagram.anagramPro(str1, str2);
}
anagramdetect();