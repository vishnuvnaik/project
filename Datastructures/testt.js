class Node {
    constructor(data, next = null) //next pointer 
    {
        this.data = data;
        this.next = next;

    }
}
// insert first node
// insert last node
// insert at index
// get at index
// remove at index
// clear the list
// print the list data
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    insertFirst(data) {
        this.head = new Node(data, this.head) //if there is something to head then push back to next
    }

    insertLast(data) {
        let node = new Node(data);
        let current;
        if (!this.head) {
            this.head = node;
        } else {
            current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
    }
    insertatIndex(data, index) {

        if (index < 0 && index > this.size) {
            return;
        }
        if (index === 0) {
            this.insertFirst(data);
            return;
        }
        const node = new Node(data);
        let current, previous;
        current = this.head;
        let i = 0;
        while (i < index) {
            previous = current; //node before index
            i++;
            current = current.next;
        }
        node.next = current;
        previous.next = node;
        this.size++;

    }
    removeatIndex(index) {
        if (index < 0 && index > this.size) {
            return;
        }
        let current = this.head;
        let previous;
        let i = 0;
        if (index === 0) {
            this.head = current.next;

        } else {
            while (i < index) {
                i++;
                previous = current;
                current = current.next;

            }
            previous.next = current.next;
        }
        this.size--;

    }
    printListData() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;

        }
    }
}
const ll = new LinkedList();
ll.insertFirst(100);
ll.insertFirst(3454);
ll.insertLast(34);
ll.insertFirst("jik")
ll.insertatIndex(500, 3);
ll.removeatIndex(0);
ll.insertatIndex(500, 1);
ll.printListData();