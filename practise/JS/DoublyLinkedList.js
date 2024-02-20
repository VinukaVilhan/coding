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

    //enter an node at the beginning of the list
    unshift(val)
    {
        //create a new node
        var newNode = new Node(val);
        
        if(this.length === 0)
        {
            this.head = newNode;
            this.tail = newNode;
        }
        else
        {
            //set the previous property of the head to be the new node
            this.head.prev = newNode;
            //set the next property of the new node to be the head propert
            newNode.next = this.head;
            //update the head to the new node
            this.head  = newNode;
        }

        this.length++;
        return this;
    }

    //returns the element at given index
    get(index)
    {
        if(index < 0 || index >= this.length)
        {
            return null;
        }

        let current ;
        if(index === this.length - 1)
        {
            return this.tail;
        }
        else if(index <= this.length / 2)
        {
            current = this.head;
            for(let i = 0; i < index; i++)
            {
                //update the element
                current = current.next;
            }
        }
        else(index > this.length/2)
        {
            current = this.tail
            for(let i = this.length -1 ; i > index; i--)
            {
                //update the element
                current = current.prev;
            }
        }
        return current;
    }

    //set a new value for the node

    set(index, val)
    {
        var replace = this.get(index);

        if(replace != null)
        {
            replace.val = val;
            return true;
        }
        else
        {
            return false;
        }
        
    }

    insert(index , val)
    {

        if(index < 0 || index > this.length) return undefined;

        if(index === 0)
        {
            return this.unshift(val);
        }

        if(index === this.length)
        {
            return this.push(val);
        }

        var newNode = new Node(val);

        var earlyPosition = this.get(index - 1);
        var currentIndex = this.get(index);
        
        //previous connection
        earlyPosition.next = newNode;
        newNode.prev = earlyPosition;
        
        //next connection 
        newNode.next = currentIndex;
        currentIndex.prev = newNode;
        this.length++;
        return true;
    }

    remove(index)
    {
        if(index < 0 || index > this.length) return undefined;

        if(index === 0)
        {
            return this.shift();
        }

        if(index === this.length - 1)
        {
            return this.pop();
        }

        var remove = this.get(index)
        var previous  = this.get(index - 1);
        var next = this.get(index + 1);
        //previous node setting
        previous.next = next;

        //next node setiing
        next.prev = previous;

        //setting prevoius and next elemnts of the current node to null
        remove.next = null;
        remove.prev = null;

        this.length --;

        return remove;

    }
}

var list = new doublyLinkedList();

list.push('Vilhan')
list.push("vilhan")
console.log(list.get(1).val)

