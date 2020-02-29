/**
 * @description : Takes themonth and year as an arguement and displays the calendar for inputted year and month
 * @param {month,year,n}
 * @return  displays the calendar for inputted month and year
 */
exports.calendarDisplay = (month, year) => {
    try {
        function day(month, year, n) { //function to use the getDay();
            return new Date(year, month, n).getDay();
        }

        function date(month, year, n) { //function to use getDate()
            return new Date(month, year, n).getDate();
        }
        var arrCal = new Array(8); //declaration of array
        for (let i = 0; i < arrCal.length; i++) {
            arrCal[i] = new Array(8);
        }
        var dateone = Date(month, year, 0) //frist date is stored in this variable
        var datetwo = Date(month, year, 1) // last date date is stored in this variable
        /* initialising the days */
        arrCal[0][1] = 'Mon', arrCal[0][2] = 'Tue', arrCal[0][3] = 'Wed', arrCal[0][4] = 'Thu', arrCal[0][5] = 'Fri', arrCal[0][6] = 'Sat', arrCal[0][7] = 'Sun';
        for (let i = 0; i < arrCal.length; i++) { // loops to get the array
            for (let j = 0; j < arrCal.length; j++) {
                if (j === day(month, year, dateone) && (dateone <= datetwo)) {
                    arrCal[i][j] = dateone;
                    dateone++;
                } else {
                    arrCal[i][i] = '';
                }
            }
        }

        for (var i = 0; i < arrCal.length; i++) // loops to display the calendar in the desired format
            var str = ''; {
            for (var j = 0; j < arrCal.length; j++) {
                if (i === 0) {
                    str = str + arrCal[i][j] + ' ';
                } else if (arrCal[i][j] === '') {
                    str = str + '   ';

                } else if (arrCal[i][j] > 9) {
                    str = str + arrCal[i][j] + ' ';
                } else {
                    str = str + arrCal[i][j];
                }
            }
            console.log(str) // print statement to print the calendar
        }
    } catch (error) {
        console.log(error)
    }
}