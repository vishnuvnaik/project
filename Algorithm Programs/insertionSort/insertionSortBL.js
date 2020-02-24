/**
* @description : Insertion sort algorithm
* @param {insertionSort}
* @return Sort and display the inputted strings
*/

exports.insertionSort = (arr) => {
    try {
        var length = arr.length;
        for (var i = 1; i < length; i++) {
            var temp = arr[i];
            /**
             *  Current element is being copied. 
             *   Check the sorted part and compare with the number in temp. If it is large, shift the number.
             * 
             */
            for (var j = i - 1; j >= 0 && (arr[j] > temp); j--) {
                /**
                 * Shifting the number.
                 * 
                 *  */
                arr[j + 1] = arr[j];
            }
            /**
             * 
             * copied number is inserted at the right position
             *  */
            arr[j + 1] = temp;
        } /* print the sorted array */
        console.log("Sorted List:" + arr);

    } catch (error) {
        console.log(error)
    }
}
