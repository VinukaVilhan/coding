class priorityQueue
{
    constructor()
    {
        this.values = [];
    }

    enqueue(element, priority)
    {
        //create a new node
        let newNode = new Node(element, priority)

        //push the value into the values property on the heap
        this.values.push(newNode);

        //bubble up
        this.bubbleUp();
    }

    //min binary heap will be used

    //gets the element up to it's appropriate location
    bubbleUp()
    {
        //gets the last index of the element
        var index = this.values.length - 1; 

        //store the value of the last element (child index value)
        const element = this.values[index];

        while(index > 0)
        {
            //gets the parent element index
            let parentIndex = Math.floor((index  - 1) / 2);
            console.log(parentIndex);
            //value of the parent index
            let parent = this.values[parentIndex];

            //if the parent priority is more than the child priority it is where it should stay
            if(element.priority <=  parent.priority) break;
            
            //in the array parent index is subsituted with the last added element
            this.values[parentIndex] = element;
            //the last element is substituted with the parent value
            this.values[index] = parent;

            //updating the index
            index = parentIndex;
        }
    }

    //removes the max element substitute with the recently added element and sink it down to relevant position
    dequeue() {
        // Swap the first value (root) in the array with the last element
        const min = this.values[0];
        const end = this.values.pop();
        if (this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown();
        }
        return min;
    }
    
    sinkDown() {
        let idx = 0;
        const length = this.values.length;
        //first element value(max)
        const element = this.values[0];
        while (true) {
            //finding the left and right children indices
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            // stores
            let leftChild, rightChild;
            // keep track of the swaps
            let swap = null;

            //checking if the left is in bound
            if (leftChildIdx < length) {
                //gets the value of the left child
                leftChild = this.values[leftChildIdx];
                if (leftChild.priority < element.priority) {
                    swap = leftChildIdx;
                }
            }
            //checking if the right is in bound
            if (rightChildIdx < length) {
                //gets the value of the right child
                rightChild = this.values[rightChildIdx];
                if (
                    //no swap has been done because current element priority is larger than leftChild
                    (swap === null && rightChild.priority < element.priority) ||
                    //leftChild priority is larger than element priority but the right child priority is larger 
                    (swap !== null && rightChild.priority < leftChild.priority)
                ) {
                    swap = rightChildIdx;
                }
            }
            //no swap is done because none of the children are larger
            if (swap === null) break;
            //swap the values
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            //the current index is updated to the recently swapped index
            idx = swap;
        }
    }
}

class Node
{
    constructor(val, priority)
    {
        this.val = val;
        this.priority = priority;
        //if there are similar priority level elements
        this.time = Date.now();
    }
}

let pq = new priorityQueue();
pq.enqueue("goals",10)
pq.enqueue("people", "8")
pq.enqueue("fun", 3)
console.log(pq)