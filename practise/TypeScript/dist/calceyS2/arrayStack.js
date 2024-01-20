"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ArrayStack = /** @class */ (function () {
    function ArrayStack() {
        this.stackItems = [];
    }
    //- private , + public, #protected
    ArrayStack.prototype.push = function (item) {
        this.stackItems.push(item);
    };
    ArrayStack.prototype.pop = function () {
        return this.stackItems.pop();
    };
    ArrayStack.prototype.peek = function () {
        return this.stackItems[this.stackItems.length - 1];
    };
    ArrayStack.prototype.isEmpty = function () {
        return this.stackItems.length === 0;
    };
    ArrayStack.prototype.clear = function () {
        this.stackItems = [];
    };
    return ArrayStack;
}());
exports.default = ArrayStack;
