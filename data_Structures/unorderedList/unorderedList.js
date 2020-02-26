/***************************************************************
 * @Execution : default node : cmd> 
 * @Purpose : 
 * @description : 
 * @overview : 
 * @author : Vishnu V Dev <vishnuvdev17@gmail.com>
 * @version : 1.0
 * @since : February 18 2020
 ****************************************************************/

const path = require('./unorderedListBL')
let input = require('readline-sync')
var fs = require('fs')
var arr = [];


var fileR = fs.readFileSync('Sample.txt', 'utf8', function (err, data) {
    if (err) {
        console.log(error)
    } else {
        return data;
    }
});
var splitfileR = fileR.split(' ');
path.unOrdered(splitfileR)