/**
* @description : Day of week     
* @param {doW}
* @return Input the month day and year and display the respected day of week
*/
temP = (temp) => {
    try {
        let input = require('readline-sync')
        var ch = 0;
        var Celsius = 0;
        var fahrenheit = 0;
        ch = input.question(" Press 1 Celsius to Fahrenheit: \n Press 2  Fahrenheit to Celsius: \n Enter your choice :")
        /**
         * Taking user input choice to convert temperature to fahrenheit and Celsius.
         */
        if (ch == 1) {

            fahrenheit = (temp * 9 / 5) + 32;
            console.log("Temperature in fahrenheit :" + fahrenheit + " Fahrenheit");

        }
        else if (ch == 2) {

            Celsius = (temp - 32) * 5 / 9;
            console.log(" Temperature in Celsius :" + Celsius + " degree");

        }


    } catch (error) {
        console.log(error)
    }
}
module.exports = { temP }