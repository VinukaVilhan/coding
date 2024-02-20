class Node
{
    constructor(value)
    {
        this.value = value;
        this.next=null;
    }
}

class Queue
{
    constructor()
    {
        this.first = null;
        this.last - null;
        this.size = 0;
    }

    //add to the back of the list
    enqueue(val)
    {
        var newNode = new Node(val);

        if(this.size === 0)
        {
            this.first = newNode;
            this.last = newNode;
        }
        else
        {
            this.last.next = newNode;
        }
        return ++this.size;
    }

    //remove from the beginning of the list
    dequeue (val)
    {
        if(!this.first)
        {
            return null;
        }

        var temp = this.first;

        if(this.first === this.last)
        {
            this.first = null;
            this.last = null;
        }
        else
        {
            this.first = this.first.next;
        }
        this.size--;
        return temp.value;
    }
}

var queue = new Queue()
queue.enqueue("first")
queue.enqueue("second")
queue.enqueue("third")

console.log(queue)
console.log(queue.dequeue())

