/**
* @description : Merge Sort Algorithm      
* @param {Merge Sort}
* @return Sort the input set of strings using merge sort method
*/
exports.mergeSort = (arr) => { //function declared
    try {
        let length = arr.length; //to find the length of the strings
        if (length < 2) {
            return arr;
        }
        let mid = Math.floor(length / 2);
        let left = arr.slice(0, mid)
        let right = length - mid;
        let result = [];
        let rlen = right.length;
        let llen = left.length;
        let l = 0, r = 0;
        while (l < llen && r < rlen) { //while loop for sorting the inputted strings
            if (left[l] < right[r]) { //if loop for checking the condition and pushing right or left to the result
                result.push(left[l++]);
            }
            else {
                result.push(right[r++]);
            }
        }

        console.log(result.concat(left.slice(l)).concat(right.slice(r))); //printing the strings

    } catch (error) {
        console.log(error)

    }
}