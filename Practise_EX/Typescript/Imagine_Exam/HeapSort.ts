import MaxHeap from "./MaxHeap";

function heapSort(arr:number[]): number[]
{
    let maxHeap = new MaxHeap();

    for(let num of arr)
    {
        maxHeap.insert(num);
    }

    for(let i = arr.length -1; i >=0 ; i--)
    {
        arr[i] = maxHeap.extractMax()!;
    }
    return arr;
}