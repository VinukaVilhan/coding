class Node
{
    constructor(value)
    {
        this.value = value;
        this.next=null;
    }
}

class Stack
{
    constructor()
    {
        this.first = null;
        this.last - null;
        this.size = 0;
    }

    push(val)
    {
        var newNode = new Node(val);
        if(this.size === 0)
        {
            this.first = newNode;
            this.last = newNode;
        }
        else if(this.size >= 1)
        {
            
            //storing the first element 
            let temp = this.first;
            
            //store the new node as the first element
            this.first = newNode;
            
            //the previous this.first is stored as the element before(next in this reference) current this.first 
            newNode.next  =  temp;
        }
        this.size++;
        return this.size;
    }

    pop()
    {
        if(this.size === 0)
        {
            return null;
        }

        //temporary element to store the first property on the stack
        var temp = this.first;

        if(this.size === 1)
        {
            this.first = null;
            this.last =null;
        }
        else
        {          
            this.first =this.first.next;
        }

        this.size--;
        return temp.value;
    }
}

var list = new Stack()
list.push(1)
list.push(2)
list.push(3)
console.log(list.first.next.value)
console.log(list.first.value)
console.log(list.last.value)