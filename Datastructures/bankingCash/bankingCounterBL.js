/**
 * @description : Simulate banking cash counter
 * @param {exprsn}
 * @return  Displays the balance after withdrawal and deposit of cash
 */
var input = require('readline-sync')
exports.bankingCash = (bank) => {
    try {
        class Queue { // creating queue class
            constructor() {
                this.Queue = [];
            }
            enqueue(data) { // adds an element to the queue
                this.Queue.push(data); //adding element to the queue
            }
            dequeue() { //removes an element
                return this.Queue.shift(); //removing and element from the queue
            }
            isEmpty() { //checks wheather the queue is empty or not
                if (this.Queue.length === 0) {
                    return true;
                } else {
                    false;
                }

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
                while (i < this.Queue.length)

                {
                    string = string + this.Queue[i] + '';
                    i++;
                }
                console.log(string);
            }
        }
        var quenew = new Queue; //creating object for queue class
        var balance;
        balance = input.questionInt(' enter the user balance ');
        switch (bank.toLowerCase()) { //switch case to choose withdraw or deposit
            case 'withdraw':
                var withdrawamt = input.questionInt('enter the withdraw amount user');
                quenew.enqueue(withdrawamt);
                withdraw(withdrawamt);
                break;
            case 'deposit':
                var depositamt = input.questionInt(' enter the deposit amount user');
                quenew.enqueue(depositamt);
                deposit(depositamt);
                break;
            default:
                console.log('enter some valid input');
        }

        function withdraw(withdrawamt) { //withdraw function 
            if (balance > withdrawamt) {
                balance = balance - withdrawamt;
                console.log(" new balance of the user is ", balance);
                userInput();
            } else {
                console.log(" you didnt have sufficient balance dude!!");
            }
        }

        function deposit(depositamt) { //deposit function
            balance = balance + depositamt;
            console.log(" amount has been deposited the new balance is ", balance);
            userInput();
        }

        function userInput() { //user input to continue or cancel .
            console.log(" do you need to continue with the transaction or cancel the process");
            var newbank = input.question(" enter withdraw or deposit or cancel ")
            switch (newbank) {
                case 'withdraw':
                    let withdrawamt = input.questionInt('enter the withdraw amount user');
                    quenew.enqueue(withdrawamt);
                    withdraw(withdrawamt);
                    break;
                case 'deposit':
                    let depositamt = input.questionInt(' enter the deposit amount user');
                    quenew.enqueue(depositamt);
                    deposit(depositamt);
                    break;
                case 'cancel':
                    quenew.dequeue();
                    break;
                default:
                    console.log("enter valid input");
            }
        }
    } catch (error) {
        console.log(error);
    }
}