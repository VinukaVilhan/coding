class MinHeap
{
    private heap: number[];
    constructor()
    {
        this.heap = [];
    }
    
    public insert(value:number): void
    {
        this.heap.push(value);
        this.bubbleUp(this.heap.length - 1);
    }

    public extractMin():number|null
    {
        if(this.heap.length == 0)
        {
            return null;
        }
        else if(this.heap.length === 1)
        {
            return this.heap.pop()!;
        }

        let root = this.heap[0];
        this.heap[0]  =this.heap.pop()!;
        this.bubbleDown(0);

        return root;
    }

    private bubbleUp(index: number): void
    {
        while(index > 0)
        {
            const parentIndex = Math.floor((index -1 )/ 2);
            if(this.heap[index] < this.heap[parentIndex])
            {
                [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
                index = parentIndex;
            }
            else
            {
                break;
            }
        }
    }

    private bubbleDown(index: number): void
    {
        const heapSize = this.heap.length;

        while (true)
        {
            let leftChildrenIndex  = 2 * index  +1;
            let rightChildrenIndex = 2 * index + 2;
            let smallest = index;
            
            if(leftChildrenIndex < heapSize && this.heap[leftChildrenIndex] < this.heap[smallest] )
            {
                smallest = leftChildrenIndex;
            }

            if(rightChildrenIndex < heapSize && this.heap[rightChildrenIndex] < this.heap[smallest] )
            {
                smallest = rightChildrenIndex;
            }

            if(smallest !== index)
            {
                this.swap(index, smallest);
                index = smallest;
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

export default MinHeap;
