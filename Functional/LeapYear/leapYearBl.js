/**
* @description : A program with cubic running time. Read in N integers and counts the number of triples that sum to exactly 0.
* @purpose : Prints all triplets in array with 0 sum
* @return displays the solution of the quadratic equation
*/

leapYearmain = (year) => {
    try {
        if (year.length < 4) {
            console.log(" enter valid year");
        }
        else {
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