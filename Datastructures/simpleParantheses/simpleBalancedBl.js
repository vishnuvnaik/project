/**
 * @description : Takes an Arithmetic Expression where parentheses are used to order the performance of operations. 
    Ensure parentheses must appear in a balanced fashion.
 * @param {simple balanced parantheses}
 * @return  displays the new update in the file
 */

exports.simpleParantheses = (exprsn) => {
    try {
        class Stack { //declared class for stack
            constructor() {
                this.data = [];
                this.top = 0;
            }
            push(elem) {
                this.data[this.top] = elem; //push the element to top the stack
                this.top += 1; //incrementing top count
            }
            peak() {
                return this.data[this.top - 1]; //getting the last inputted data from the stack
            }
            size() {
                return this.top; //to get the size of the stack
            }
            isEmpty() {
                return this.top === 0; // to check the wheather the stack is empty or not
            }
            pop() {
                if (this.isEmpty() === false) { //check the condition and pop the item from the stack
                    this.top = this.top - 1;
                    return this.data.pop(); //removes the last item from the stack
                }
            }
            print() {
                var top = this.top - 1; // top points to index where new element to be
                while (top >= 0) {
                    console.log(this.data[top]);
                    top--;
                }
            }

        }
        const arr = exprsn.split('') //adding the string to an array
        const mystack = new Stack(); //storing stack data to mystack
        for (let i = 0; i < arr.length; i++) {
            var ch = exprsn.charAt(i);
        }
        if (ch === '(') { //condition check for balanced  parantheses
            mystack.push(ch);
        } else {
            switch (ch) {
                case ')':
                    if (mystack.pop() != '(') {
                        return false;

                    }
            }
        }
        if (mystack.size == 0) {
            console.log("arithmetic expression balanced");
        } else {
            console.log("not balanced");
        }
        mystack.print();


    } catch (error) {
        console.log(error)
    }
}