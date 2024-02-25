class MaxHeap
{
    //array to store numbers
    private heap: number[];
    constructor()
    {
        //array will be initialized after the object is constructed
        this.heap = [];
    }
    
    public insert(value:number): void
    {
        this.heap.push(value);
        this.bubbleUp(this.heap.length - 1);
    }

    public extractMax():number|null
    {
        if(this.heap.length == 0)
        {
            return null;
        }
        else if(this.heap.length === 1)
        {
            return this.heap.pop()!;
        }

        //root is assigned of the last element value of the array
        let root = this.heap[0];
        this.heap[0]  =this.heap.pop()!;
        //bubble down
        this.bubbleDown(0);

        return root;
    }

    public bubbleUp(index: number): void
    {
        while(index > 0)
        {
            const parentIndex = Math.floor((index -1 )/ 2);
            if(this.heap[index] > this.heap[parentIndex])
            {
                // Swap the current index with the parent index
                [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
                // Update the current index to the parent index after swap
                index = parentIndex;
            }
            else
            {
                // If the parent is larger than or equal to the current node, break the loop
                break;
            }
        }
    }


    private bubbleDown(index: number): void
    {
        const heapSize = this.heap.length;

        while (true)
        {
            //finding out the children of the parent node 
            let leftChildrenIndex  = 2 * index  +1;
            let rightChildrenIndex = 2 * index + 2;
            let largest = index;
            
            //checking if the leftchildren index is not out of bound
            //
            if(leftChildrenIndex < heapSize && this.heap[leftChildrenIndex] > this.heap[largest] )
            {
                largest = this.heap[leftChildrenIndex]
            }

            if(rightChildrenIndex < heapSize && this.heap[rightChildrenIndex] > this.heap[largest] )
            {
                largest = this.heap[rightChildrenIndex]
            }

            if(largest !== index)
            {
                this.swap(index, largest);
                index = largest;
            }
            else
            {
                break;
            }
        }

    }

    private swap(index1:number, index2:number):void
    {
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]]
    }
}

export default MaxHeap;