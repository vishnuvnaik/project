class Stack {
    constructor() {
        this.data = [];
        this.top = 0;
    }
    push(elem) {
        this.data[this.top] = elem;
        this.top += 1;
    }
    peak() {
        return this.data[this.top - 1];
    }
    size() {
        return this.top;
    }
    isEmpty() {
        return this.top === 0;
    }
    pop() {
        if (this.isEmpty() === false) {
            this.top = this.top - 1;
            return this.data.pop();
        }
    }
    print() {
        var top = this.top - 1;
        while (top >= 0) {
            console.log(this.data[top]);
            top--;
        }
    }

}
var mystack = new Stack();
mystack.push(2);
mystack.push(6);
mystack.push(124);

console.log(mystack.size());
mystack.print();