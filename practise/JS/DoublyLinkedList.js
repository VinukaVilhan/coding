class Node
{
    constructor(val)
    {
        this.val  = val;
        this.prev = null;
        this.next = null;
    }
}

class doublyLinkedList
{
    constructor()
    {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val)
    {
        var newNode = new Node(val); 
        if(!this.head)
        {
            this.head = newNode;
            this.tail = newNode;
        }
        else
        {
            //set the next property on the tail to be that node
            this.tail.next = newNode;
            //set the previous property on the newly created node to be the tail
            newNode.prev = this.tail;
            //set the tail to be newly created node
            this.tail = newNode;
            this.length++;
        }
        return this;
    }
}

var list = new doublyLinkedList();
list.push('yo')
list.push('are')
console.log(list)