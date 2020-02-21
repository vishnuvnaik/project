/**
* @description : Bubble Sort Algorithm      
* @param {Bubble}
* @return Sort the input set of numbers using bubble sort method
*/
bubblePro = (size) => {
    try {
        var arr = []; // Array declared
        let temp;
        for (i = 0; i < size; i++) {    //loop to input the elements of the array
            let input = require('readline-sync')
            arr[i] = input.questionInt('enter elements')
            
        }
        var len = arr.length; //bubble sort algorithm starts
        for (var i = len - 1; i >= 0; i--) { 
            for (var j = 1; j <= i; j++) {
                if (arr[j - 1] > arr[j]) {
                    temp = arr[j - 1];       //sorting using temp variable
                    arr[j - 1] = arr[j];
                    arr[j] = temp;
                }
            }
        }
        console.log(arr)
    } catch (error) {
        console.log(error)

    }
}
module.exports = { bubblePro }