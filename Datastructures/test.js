var fs = require('fs')
var data = fs.readFileSync('Sample.txt', 'utf8', function (err, data) {
    if (err) throw err;

    arr = data.toLocaleString().split(",");
});
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
}
const ll = new LinkedList();
let input = require('readline-sync');

var x = "" + arr;

var arr = x.split(" ");
fs.writeFile('Sample.txt', data, (err) => {
    // In case of a error throw err. 
    if (err) throw err;
})

data = ll.insertFirst("his");
ll.insertFirst(100);
ll.insertFirst(3628);
console.log(ll);