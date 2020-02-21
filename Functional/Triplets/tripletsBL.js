/**
* @description : A program with cubic running time. Read in N integers and counts the number of triples that sum to exactly 0.
* @purpose : Prints all triplets in array with 0 sum
* @return displays the solution of the quadratic equation
*/

findTriplets = (size) =>
 {
    try {
        var find = true;
        var array = [];
        var count = 0;

        for (let i = 0; i < size; i++) {
            let input = require('readline-sync')
            array[i] = input.questionInt("Enter element :");
            /**
             * loop till the input is equal to user desired size of the array
             * input the elements of array and print
             * 
             */
        }
        console.log(array);
        /**
         * Looop over till all triplets in arr[] with 0 sum 
         */
        for (let i = 0; i < array.length - 2; i++) {
            for (let j = i + 1; j < array.length - 1; j++) {
                for (let k = j + 1; k < array.length; k++) {
                    if (Number(array[i]) + Number(array[j]) + Number(array[k]) == 0) {
                        console.log(array[i] + " " + array[j] + " " + array[k]);
                        count++;
                        find = true;
                    }
                }
            }
        }
        console.log("number of triplets are ", count);
        // If no triplet with 0 sum found in array 
        if (find == false) {
            console.log("does not exists");
        }
    }
    catch (err) {
        console.log(err.message);

    }
}