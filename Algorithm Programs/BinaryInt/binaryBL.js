/**
* @description : Binary Search
* @param {Binary search algorithm}
* @return Searching of inputted number in the array
*/

binaryI = (size) => {
    try {
        var arr = []; // Array declared
        let temp;
        for (let i = 1; i <= size; i++) {    //loop to input the elements of the array
            let input = require('readline-sync')
            arr[i] = input.questionInt('enter elements')
        }
        let input = require('readline-sync');
        let search = input.questionInt('enter the element to search ');
        let first = 0;
        let last = arr.length - 1;
        let mid = first + Math.floor((last - first) / 2);
        /**
        * Iterate while start not meets stop
        */
        while (first <= last) {

            /**
             * If element is present at mid, return True
             */
            if ((arr[mid]) == search)
                /**
               * Else look in left or right half accordingly
               */
                return true;
            else if ((arr[mid]) < search)
                first = mid + 1;
            else
                last = mid - 1;
        }
        return false;



    } catch (error) {
        console.log(error.message);

    }
}
module.exports = { binaryI }