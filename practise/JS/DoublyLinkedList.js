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
        if(index <= this.length / 2)
        {
            current = this.head;
            for(let i = 0; i < this.length; i++)
            {
                if( i === index)
                {
                    return current.val;
                }
                //update the element
                current = current.next;
            }
        }
        else if(index > this.length/2)
        {
            current = this.tail
            for(let i = this.length -1 ; i > this.length / 2; i--)
            {
                if( i === index)
                {
                    return current.val;
                }
                //update the element
                current = current.prev;
            }
        }
    }
}

var list = new doublyLinkedList();
list.unshift('vinuka')
list.push('Vilhan')
list.push('fernando')
list.push('pulle')
console.log(list.get(2))
