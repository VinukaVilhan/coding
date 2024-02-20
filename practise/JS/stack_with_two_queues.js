class Stack {
    constructor() 
    {
        //used to enque values
        this.q1 = new Queue();
        this.q2 = new Queue();
    }
    push(val) {
        this.q1.enqueue(val);
        return this;
    }
    pop() 
    {
        //needs to remove the first element
        if(!this.q1.first) return null;
        
        while(this.q1.size > 1)
        {
            this.q2.enqueue(this.q1.dequeue());
        }
        
        let popped = this.q1.dequeue();
        
        // Swap the queues
        [this.q1, this.q2] = [this.q2, this.q1];
        
        return popped;
    }
    print() {
        let current = this.q1.first;
        while(current) {
            console.log(current.value);
            current = current.next;
        }
    }
}


// QUEUE AND NODE HAVE BEEN IMPLEMENTED FOR YOU

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enqueue(data) {
        var node = new Node(data);

        if (!this.first) {
            this.first = node;
            this.last = node;
        } else {
            this.last.next = node;
            this.last = node;
        }

        return ++this.size;
    }

    dequeue() {
        if (!this.first) return null;

        var temp = this.first;
        if (this.first == this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
    
    
}

var list = new Stack()
list.push(1)
list.push(2)
list.push(3)
list.print();

console.log(list.pop())