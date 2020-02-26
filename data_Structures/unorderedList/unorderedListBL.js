/**
 * @description : 
 * @param { }
 * @return  
 */
exports.unOrdered = (data) => {

    try {
        class node {
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
        }
        add(data) {
            let current;
            let newNode = newNode(data);
            if (this[head] == null) // no items in the list yet
            {
                this[head] = newNode; // set the head to the new node
            } else {
                current = this[head];
                while (current.next == null) {
                    current = current.next;
                }
                current.next = newNode;
            }

        }
        remove




    } catch (error) {
        console.log(error)
    }
}