//represents individual nodes in the linked list
class Node
{
    constructor (val)
    {
        //stores the value passed
        this.val = val;
        this.next = null;
    }
}

class singlyLinkedList
{
    constructor()
    {
        this.head = null;
        this.tail = null;
        this.length = 0;

    }

    push (val)
    {
        //new node is created with the given value
        var newNode = new Node(val);
        //if teh head is empty the new node becomes the head and the tail
        if(!this.head)
        {
            this.head = newNode;
            this.tail = this.head;
        }
        //appends the new node to the end of the list
        else
        {
            //sets the next property of the current tail to point to the new node.
            this.tail.next = newNode;
            //update the tail reference to point to new node
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    //removes an element form the end of the list
    pop()
    {
        if(!this.head)
        {
            return undefined;
        }

        //initializes current and newTail as the head node. 
        var current = this.head;
        var newTail = current;
        //traverse the list until current.next becomes null
        while(current.next)
        {
            //keeps track of the second-to-last node
            newTail = current;
            //moves to next node 
            current = current.next
        }
        //updates the tail as the element as the second-to-last node
        this.tail = newTail;
        //sets the next property of the new tail to null, removing the last node
        this.tail.next = null;
        this.length --;

        //checks if there is no element left
        if(this.length === 0)
        {
            this.head = null;
            this.tail = null;
        }
        return this;
    }

    //removes an element from the begining
    shift()
    {
        if(this.length === 0)
        {
            return undefined;
        }
        if(this.head)
        {
            //makes the current head store in a temporary variable
            var currentHead = this.head;
            this.head = currentHead.next;
            this.length --;
        }

        if(this.length === 0)
        {
            this.tail = null;
        }
        return currentHead;
    }

    //add a new node to the beginning of the linked list
    unshift(val)
    {
        var newNode = new Node(val);
        //if there is no head in the list you must add the new element as head and tail
        if(!this.head)
        {
            this.head = newNode;
            this.tail = this.head;
        }
        else
        {
            newNode.next  = this.head;
            this.head = newNode;
        }
        this.length ++;
        return this;
    }

    //returns the array element of the given index
    get(index)
    {
        if( index < 0 || index >= this.length)
        {
            return null;
        }

        //loop through the list until you reach the index 
        var counter = 0;
        var current = this.head;
        for(let x = 0; x < index; x++ )
        {
            current = current.next;
            counter++;
        }

        return current;
    }

    //set a new value at a given index
    set(val, index)
    {
        var foundNode = this.get(index);
        if(foundNode)
        {
            //access the node value and assign the given value
            foundNode.val = val;
            return true;
        }
        else
        {
            return false;
        }
    }

    //insert a value at a given index
    insert(val, index)
    {
        if( index < 0 || index > this.length)
        {
            return false;
        }

        if(index === this.length)
        {
            return this.push(val);
        }
        else if (index === 0)
        {
            return this.unshift(val);
        }
        else
        {
            //create a new node
            var newNode = new Node(val);
            
            var oldPos = this.get(index - 1);
            //remporay place holder
            var temp = oldPos.next;
            oldPos.next = newNode;
            newNode.next = temp;
            this.length++;
            return true;
        }
    }

    //removes the node at the given index
    remove(index)
    {
        if( index < 0 || index >= this.length)
        {
            return undefined;
        }
        if(index === 0)
        {
            return this.shift();
        }
        if(index === this.length -1)
        {
            return this.pop();
        }

        var oldNode = this.get(index - 1);
        var remove = oldNode.next;
        oldNode = remove.next;

        this.length --;

        return remove;
    }

    reverse() {
        var node = this.head;
        this.head = this.tail;
        this.tail = node;

        console.log(node.val);
        console.log(this.head.val);
        console.log(this.tail.val);

        var next = null;
        var prev = null;
    
        for(let x = 0; x < this.length; x++) {
            //node after the head
            next = node.next;

            node.next = prev;
            prev = node;
            node = next;

        }
    
        return this;
    }

    print() {
        var current = this.head;
        var result = [];
        while(current) {
            result.push(current.val);
            current = current.next;
        }
        return result;
    }
    
}

var list = new singlyLinkedList()
list.push(1)
list.push(2)
list.push(3)
list.push(4)
console.log(list.reverse())
console.log(list.print())
