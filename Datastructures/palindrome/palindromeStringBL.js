/**
 * @description : Takes themonth and year as an arguement and displays the calendar for inputted year and month
 * @param {month,year,n}
 * @return  displays the calendar for inputted month and year
 */
exports.palindromString = (str) => {
    try {
        class Deque { // creating queue class
            constructor() {
                this.Dequeue = [];
            }
            addFront(data) { // adds an element to the queue
                this.Queue.push(data); //adding element to the queue
            }
            removeFront() { //removes an element
                return this.Queue.shift(); //removing and element from the queue
            }
            isEmpty() { //checks wheather the queue is empty or not
                if (this.Queue.length === 0) {
                    return true;
                } else {
                    false;
                }

            }
            length() {
                return this.Queue.length;
            }
            front() { // returns the front element of the queue without removing it
                if (this.empty) {
                    console.print(" no data");
                } else {
                    return this.Queue;
                }
            }
            printQue() { //function to print the queue
                let string = '';
                let i = 0;
                while (i < this.Queue.length) {
                    string = string + this.Queue[i] + '';
                    i++;
                }
                console.log(string);
            }
        }
        var quenew = new Queue;
        let i = 0;
        if (str.length >= 2) {
            while (i < str.length) {
                quenew.enqueue(str[i]);
                i++
            }
            let j = quenew.length();
            while (j >= 0) {
                if (quenew.length() == str[j]) {
                    quenew.dequeue();
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