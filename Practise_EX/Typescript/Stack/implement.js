"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ArrayStack = /** @class */ (function () {
    function ArrayStack() {
        this.itemList = [];
    }
    ArrayStack.prototype.push = function (item) {
        this.itemList.push(item);
    };
    //removes the last element from the array
    ArrayStack.prototype.pop = function () {
        return this.itemList.pop();
    };
    ArrayStack.prototype.peek = function () {
        return this.itemList[this.itemList.length - 1];
    };
    ArrayStack.prototype.isEmpty = function () {
        if (this.itemList.length == 0) {
            return true;
        }
        else {
            return false;
        }
    };
    ArrayStack.prototype.clear = function () {
        this.itemList = [];
    };
    return ArrayStack;
}());
exports.default = ArrayStack;
