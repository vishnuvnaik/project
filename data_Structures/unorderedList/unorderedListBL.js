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

            add(data) {

                let newNode = newNode(data);
                if (this[head] == null) // no items in the list yet
                {
                    this[head] = newNode; // set the head to the new node
                } else {
                    let current = this[head];
                    while (current.next == null) {
                        current = current.next;
                    }
                    current.next = newNode;
                }

            }
            search(data) {
                let current = this.head;
                while (current !== null) {
                    if ((current.data.toLowercase) == (data.toLowercase)) {
                        return true;
                    }
                    current = current.next;
                }
                return false;
            }


            remove(index) {
                // special cases: empty list or invalid `index`
                if ((this[head] === null || index < 0)) {
                    throw new RangeError(`Index ${index} does not exist in the list.`)
                }
                if (index === 0) {
                    const data = this[head].data;
                    this[head] = this[head].next;
                    return data;
                }
                // pointer use to travese the list
                let current = this[head];
                // keeps track of the node before current in the loop
                let previous = null;
                //used to track how deep in the list 
                let i = 0;
                while ((current != null) && (i < index)) {
                    previous = current; //save the value of current
                    current = current.next; // traverse to the next node
                    i++; //increment the count                                       

                }
                //if the node was found remove it
                while (current !== null) {
                    //skip over the next node
                    previous.next = current.next;
                    return current.data;
                }
                throw new RangeError(`Index ${index} does not exist in the list.`)
            }
            print(list) {
                let current = this[head];
                let string = ' '
                while (current) {
                    string += current.data + ' ';
                    current = current.next();
                }
                console.log(string);

            }
        }


    } catch (error) {
        console.log(error)
    }
}