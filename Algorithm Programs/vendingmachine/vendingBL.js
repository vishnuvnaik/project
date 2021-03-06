/**
 * @description : There is 1, 2, 5, 10, 50, 100, 500 and 1000 Rs Notes which can be returned by Vending Machine.
 * @param {Vending machine}
 * @return Generate minimum number of notes according to the input amount
 */

vendingMach = (arr, amount) => {
    try {
        var note = 0;
        for (let i = 0; i < arr.length; i++) {
            /**
             * Loop over till the amount should be greater than 1.
             */
            if (amount / arr[i] >= 1) {
                var count = Math.floor(amount / arr[i])
                note = note + count;
                console.log(arr[i] + " Notes are " + count);
                amount = amount % arr[i];

            }
        }
        console.log("Total number of notes are :" + note);
    } catch (error) {
        console.log(error);

    }
}
module.exports = {
    vendingMach
}