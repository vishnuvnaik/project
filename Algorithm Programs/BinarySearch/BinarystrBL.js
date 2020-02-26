/**
 * @description : Binary Search
 * @param {Binary search algorithm}
 * @return Searching of inputted word in the file 
 **/

binarySearchStrg = (arr, search) => {
    try {
        var x = arr.toString();
        var arr = x.split(" ");
        arr.sort();
        console.log(arr);

        var first = 0;
        var last = arr.length - 1;
        /**
         * Iterate while start not meets stop
         */
        while (first <= last) {
            var mid = first + Math.floor((last - first) / 2);
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
module.exports = {
    binarySearchStrg
}