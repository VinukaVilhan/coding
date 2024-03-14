"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MinHeap = /** @class */ (function () {
    function MinHeap() {
        this.heap = [];
    }
    MinHeap.prototype.insert = function (value) {
        this.heap.push(value);
        this.bubbleUp(this.heap.length - 1);
    };
    MinHeap.prototype.extractMin = function () {
        if (this.heap.length == 0) {
            return null;
        }
        else if (this.heap.length === 1) {
            return this.heap.pop();
        }
        var root = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown(0);
        return root;
    };
    MinHeap.prototype.bubbleUp = function (index) {
        var _a;
        while (index > 0) {
            var parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[index] < this.heap[parentIndex]) {
                _a = [this.heap[index], this.heap[parentIndex]], this.heap[parentIndex] = _a[0], this.heap[index] = _a[1];
                index = parentIndex;
            }
            else {
                break;
            }
        }
    };
    MinHeap.prototype.bubbleDown = function (index) {
        var heapSize = this.heap.length;
        while (true) {
            var leftChildrenIndex = 2 * index + 1;
            var rightChildrenIndex = 2 * index + 2;
            var smallest = index;
            if (leftChildrenIndex < heapSize && this.heap[leftChildrenIndex] < this.heap[smallest]) {
                smallest = leftChildrenIndex;
            }
            if (rightChildrenIndex < heapSize && this.heap[rightChildrenIndex] < this.heap[smallest]) {
                smallest = rightChildrenIndex;
            }
            if (smallest !== index) {
                this.swap(index, smallest);
                index = smallest;
            }
            else {
                break;
            }
        }
    };
    MinHeap.prototype.swap = function (index1, index2) {
        var _a;
        _a = [this.heap[index2], this.heap[index1]], this.heap[index1] = _a[0], this.heap[index2] = _a[1];
    };
    return MinHeap;
}());
exports.default = MinHeap;
