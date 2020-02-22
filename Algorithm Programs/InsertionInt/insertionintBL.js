/**
* @description : Insertion sort algorithm
* @param {insertionSort}
* @return Sort and display the inputted numbers
*/

insertionPro = (size) => {
    try {

        var arr = []; // Array declared


        for (i = 0; i < size; i++) {    //loop to input the elements of the array
            let input = require('readline-sync')
            arr[i] = input.questionInt('enter elements')
        }
        var length = arr.length;
        for (var i = 1; i < length; i++) {
            var temp = arr[i];
            /**
             *  Copy of the current element. 
             *   Check through the sorted part and compare with the number in tmp. If large, shift the number
             * 
             */
            for (var j = i - 1; j >= 0 && (arr[j] > temp); j--) {
                /**
                 * Shift the number.
                 * 
                 *  */
                arr[j + 1] = arr[j];
            }
            /**
             * 
             * Insert the copied number at the correct position
             *  in sorted part.
             *  */
            arr[j + 1] = temp;

        } console.log("Sorted List:" + arr);
        return " ";
    }
    catch (error) {
        console.log(error)
    }
}

module.exports = { insertionPro }