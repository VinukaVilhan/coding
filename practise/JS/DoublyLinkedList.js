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
            
        }
        this.length++;
        return this;
    }

    pop()
    {
        if(!this.head)
        {
            return undefined;
        }

        if(this.length === 1)
        {
            this.head = null;
            this.tail = null;
        }
        else
        {
            var currentTail = this.tail;
            //update the tail to be the previous node
            this.tail = currentTail.prev;
            //set the new tail next to be null
            this.tail.next = null;
            currentTail.prev = null;
        }
        this.length--;
        return currentTail;
    }

    //pop method from the beginning of the list
    shift()
    {
        if(!this.head)
        {
            return undefined;
        }
        if(this.length === 1)
        {
            this.head = null;
            this.tail = null;
        }
        else
        {
            var currentHead = this.head;

            //update the head to be the next of the old head
            this.head = currentHead.next;

            //set the head prev property to null
            this.head.prev = null;
            //set the old head next to be null
            currentHead.next = null;
        }

        this.length--;
        return currentHead;
    }
}

var list = new doublyLinkedList();
list.push('yo')
list.push('are')
list.shift()
console.log(list)