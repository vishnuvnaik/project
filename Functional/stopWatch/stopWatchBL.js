/**
* @description :  Program to design a stopwatch timer and calculate the elapsed time
* @purpose : Calculate start time and stop time and difference between them is elapsed time 
* @return Display the elapsed time of stop watch
*/

stopWatch = (input) => 
{
    try {
        starttm = input.question('enter any key to start the stopwatch ') //variable to start the stopwatch
        let start = new Date(); //start time is stored here
        let stoptm = input.question('enter any key to stop the stopwatch') //variable to stop the stopwatch
        let stop = new Date(); //stop time is stored here
        let elapsed = stop - start ; // elapsed time is calculated 
        elapsed /= 1000; 
        let secs = Math.round(elapsed); //rounded time in seconds
        console.log("elapsedtime = ",secs);

    } catch (error) {
        console.log(error)
    }
}
module.exports = {stopWatch}