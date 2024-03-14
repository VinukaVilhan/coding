import MaxHeap from "./MaxHeap";
import MinHeap from "./MinHeap";


var minHeap = new MinHeap();
var maxHeap = new MaxHeap();

console.log('maxheap');
maxHeap.insert(50);
maxHeap.insert(60);
maxHeap.insert(40);
maxHeap.insert(10);
maxHeap.insert(30);
maxHeap.insert(20);
console.log(maxHeap.extractMax());
console.log(maxHeap);


console.log('Minheap');
minHeap.insert(40);
minHeap.insert(20);
minHeap.insert(60);
minHeap.insert(30);
console.log(minHeap.extractMin());
console.log(minHeap);


