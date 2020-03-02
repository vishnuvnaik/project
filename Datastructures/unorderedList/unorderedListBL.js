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
            add(data) {
                const node = new Node(data);
                if (this.head == null) // no items in the list yet
                {
                    this.head = node; // set the head to the new node
                } else {
                    let current = this.head;
                    while (current.next != null) {
                        current = current.next;
                    }
                    current.next = node;
                }

            }
            search(data) {
                let current = this.head;
                while (current.next != null) {
                    if (current.data == data) {
                        return true;
                    }
                    current = current.next;
                }
                if (current.data == data) {
                    return true;
                }
                return false;

            }




            remove(data) {
                if (this.head.data == data) {
                    this.head = thid.head.next
                } else {


                    // pointer use to travese the list
                    let current = this.head;
                    // keeps track of the node before current in the loop
                    let previous = null;
                    //used to track how deep in the list 

                    while (current.data != data) {
                        previous = current;
                        current = current.next;
                    }
                    previous.next = current.next;

                }
            }

            print(list) {
                let current = this.head;
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
            console.log(data[i]);

            list.add(data[i]);
            i++;
        }

        let input = require('readline-sync')
        let usersData = input.question("enter a word :- ");
        if (list.search(usersData) == true) {
            list.remove(usersData);

        } else {
            list.add(usersData);
        }

        list.print();
    } catch (error) {
        console.log(error)
    }
}