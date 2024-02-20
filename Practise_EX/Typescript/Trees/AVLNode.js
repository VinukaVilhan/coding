"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AVLNode = /** @class */ (function () {
    function AVLNode(key) {
        this.key = key;
        this.left = null;
        this.right = null;
        this.height = 1;
    }
    AVLNode.prototype.setKey = function (key) {
        this.key = key;
    };
    AVLNode.prototype.getKey = function () {
        return this.key;
    };
    return AVLNode;
}());
exports.default = AVLNode;
