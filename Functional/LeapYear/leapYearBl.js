/**
* @description : Input the year and check wheather the entered year is leap year or not
* @purpose : Prints all triplets in array with 0 sum
* @return displays wheather the entered year is a leap year or not
*/

leapYearmain = (year) => { //function to check the input and display the output
    try {
        if (year.length < 4) { //check wheather the year has 4 digits or not
            console.log(" enter valid year");
        }
        else { //check for the leap year condition and display the result
            if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
                console.log(year ," is Leap year")
            }
            else {
                console.log(year ," is Not a leap year ")
            }
        }

    } catch (error) {
        console.log(error)
    }
}
module.exports = { leapYearmain}