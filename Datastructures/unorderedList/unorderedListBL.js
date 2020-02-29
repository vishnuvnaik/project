/**
 * @description : To display the linkedlist from a file
 * @param { data }
 * @return  displays the new update in the file
 */
exports.unOrdered = (data) => {

    try {
        const head = Symbol("head");
        class Node {
            constructor(data) {
                this.data = data;
                this.next = null;

            }
        }
        class LinkedList {
            constructor() {
                this.head = null;
                this.size = 0;

            }
            search(data) {
                let current = this.head;
                while (current) {
                    if (current.data.toLowercase == data.toLowercase) {
                        return current;
                    }
                    current = current.next;
                }
                return null;
            }


            add(data) {
                const node = new Node(data);
                if (this[head] == null) // no items in the list yet
                {
                    this[head] = node; // set the head to the new node
                } else {
                    let current = this[head];
                    while (current.next) {
                        current = current.next;
                    }
                    current.next = node;
                }

            }


            remove(data) {

                // pointer use to travese the list
                let current = this[head];
                // keeps track of the node before current in the loop
                let previous = null;
                //used to track how deep in the list 
                let i = 0;
                while (current != null) {
                    if (current.data == data) {
                        if (previous == null) {
                            this.head = current.next;
                        } else {
                            previous.next = current.next;
                        }
                        this.size--;
                        return current.data;

                    }
                    previous = current;
                    current = current.next;

                }
            }

            print(list) {
                let current = this[head];
                let string = ' '
                while (current) {
                    string += current.data + '';
                    current = current.next;
                }
                console.log(string);

            }

        }
        var list = new LinkedList(); //creating object for linked list

        let i = 0;
        var len = data.length;
        while (i < len) {
            list.add(data[i]);
            i++;
        }
        list.print();
        let input = require('readline-sync')
        let usersData = input.question("enter a word :- ");
        if (list.search(usersData)) {
            list.remove(usersData);

        } else {
            list.add(usersData);
        }
        var fs = require('fs');
        fs.writeFile('Sample.txt', data, (err) => {
            // In case of a error throw err. 
            if (err) throw err;
        })

        list.print();
    } catch (error) {
        console.log(error)
    }
}