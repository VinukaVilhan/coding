"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MaxHeap = /** @class */ (function () {
    function MaxHeap() {
        //array will be initialized after the object is constructed
        this.heap = [];
    }
    MaxHeap.prototype.insert = function (value) {
        this.heap.push(value);
        this.bubbleUp(this.heap.length - 1);
    };
    MaxHeap.prototype.extractMax = function () {
        if (this.heap.length == 0) {
            return null;
        }
        else if (this.heap.length === 1) {
            return this.heap.pop();
        }
        //root is assigned of the last element value of the array
        var root = this.heap[0];
        this.heap[0] = this.heap.pop();
        //bubble down
        this.bubbleDown(0);
        return root;
    };
    MaxHeap.prototype.bubbleUp = function (index) {
        var _a;
        while (index > 0) {
            var parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[index] > this.heap[parentIndex]) {
                // Swap the current index with the parent index
                _a = [this.heap[index], this.heap[parentIndex]], this.heap[parentIndex] = _a[0], this.heap[index] = _a[1];
                // Update the current index to the parent index after swap
                index = parentIndex;
            }
            else {
                // If the parent is larger than or equal to the current node, break the loop
                break;
            }
        }
    };
    MaxHeap.prototype.bubbleDown = function (index) {
        var heapSize = this.heap.length;
        while (true) {
            //finding out the children of the parent node 
            var leftChildrenIndex = 2 * index + 1;
            var rightChildrenIndex = 2 * index + 2;
            var largest = index;
            //checking if the leftchildren index is not out of bound
            //
            if (leftChildrenIndex < heapSize && this.heap[leftChildrenIndex] > this.heap[largest]) {
                largest = leftChildrenIndex;
            }
            if (rightChildrenIndex < heapSize && this.heap[rightChildrenIndex] > this.heap[largest]) {
                largest = rightChildrenIndex;
            }
            if (largest !== index) {
                this.swap(index, largest);
                index = largest;
            }
            else {
                break;
            }
        }
    };
    MaxHeap.prototype.swap = function (index1, index2) {
        var _a;
        _a = [this.heap[index2], this.heap[index1]], this.heap[index1] = _a[0], this.heap[index2] = _a[1];
    };
    return MaxHeap;
}());
exports.default = MaxHeap;
