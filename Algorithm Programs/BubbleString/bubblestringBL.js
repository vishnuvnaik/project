/**
* @description : Bubble Sort Algorithm      
* @param {Bubble}
* @return Sort the input set of strings using bubble sort method
*/
exports.bubbleStr = (arr) => {
     try {
           let temp;
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
        console.log("Sorted List:" + arr);

    } catch (error) {
        console.log(error)

    }
}