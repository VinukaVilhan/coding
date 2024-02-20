"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TreeNode = /** @class */ (function () {
    function TreeNode(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
    TreeNode.prototype.setKey = function (key) {
        this.key = key;
    };
    TreeNode.prototype.getKey = function () {
        return this.key;
    };
    return TreeNode;
}());
exports.default = TreeNode;
