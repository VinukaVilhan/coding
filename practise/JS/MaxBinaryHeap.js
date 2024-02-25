class MaxBinaryHeap
{
    constructor()
    {
        this.values = [];
    }

    insert(element)
    {
        //push the value into the values property on the heap
        this.values.push(element);

        //bubble up
        this.bubbleUp();
    }

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

            //if the parent element is less than the child element
            if(element <=  parent) break;
            
            //in the array parent index is subsituted with the last added element
            this.values[parentIndex] = element;
            //the last element is substituted with the parent value
            this.values[index] = parent;

            //updating the index
            index = parentIndex;
        }
    }

    //removes the max element substitute with the recently added element and sink it down to relevant position
    extractMax() {
        // Swap the first value (root) in the array with the last element
        const max = this.values[0];
        const end = this.values.pop();
        if (this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown();
        }
        return max;
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
                if (leftChild > element) {
                    swap = leftChildIdx;
                }
            }
            //checking if the right is in bound
            if (rightChildIdx < length) {
                //gets the value of the right child
                rightChild = this.values[rightChildIdx];
                if (
                    //no swap has been done because element is larger than leftChild
                    (swap === null && rightChild > element) ||
                    //leftChild is larger than element but the right child is larger 
                    (swap !== null && rightChild > leftChild)
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

let heap = new MaxBinaryHeap();
heap.insert(5)
heap.insert(10)
heap.insert(30)
heap.insert(25)
console.log(heap.extractMax())
console.log(heap)