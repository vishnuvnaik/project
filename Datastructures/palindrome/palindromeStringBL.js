/**
 * @description : Takes themonth and year as an arguement and displays the calendar for inputted year and month
 * @param {month,year,n}
 * @return  displays the calendar for inputted month and year
 */
exports.palindromString = (str) => {
    try {
        class Deque { // creating queue class
            constructor() {
                this.Deque = [];
                this.items = {};
                this.count = 0;
                this.lowestcount = 0;
            }
            addRear(data) { // adds an element to the queue
                this.Deque.push(data);
                this.count++; //adding element to the queue
            }
            addFront(data) {
                if (this.empty) {
                    this.addRear(data);
                } else if (this.lowestcount > 0) {
                    this.lowestcount--;
                } else {
                    for (let index = this.count; index > 0; index--) {
                        this.items[index] = this.items[index - 1];
                    }
                    this.count++;
                    this.items[0] = data;
                }
                return true;
            }
            removeFront() { //removes an element
                if (this.isEmpty) {
                    return undefined;
                }
                let result = this.items[this.lowestCount];
                delete this.items[this.lowestCount];
                this.lowestCount++;
                return result;
            }
            isEmpty() { //checks wheather the queue is empty or not
                return this.length == 0;

            }
            length() {
                return this.count - this.lowestCount;
            }
            front() { // returns the front element of the queue without removing it
                if (this.empty) {
                    console.print(" no data");
                } else {
                    return this.Deque;
                }
            }
            printQue() { //function to print the queue
                let string = '';
                let i = 0;
                while (i < this.Deque.length) {
                    string = string + this.Deque[i] + '';
                    i++;
                }
                console.log(string);
            }
        }
        var quenew = new Deque;
        let i = 0;
        if (str.length >= 2) {
            while (i < str.length) {
                quenew.addFront(str[i]);
                i++
            }
            let j = quenew.length();
            while (j >= 0) {
                if (quenew.length() == str[j]) {
                    quenew.removeFront();
                }
                j--;

            }
            if (quenew.isEmpty()) {
                console.log("palindrome")
            } else {
                console.log("not palindrome")
            }
        }


    } catch (error) {
        console.log(error)
    }
}