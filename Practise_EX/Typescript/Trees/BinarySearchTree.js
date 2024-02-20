"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TreeNode_1 = require("./TreeNode");
var BinarySearchTree = /** @class */ (function () {
    function BinarySearchTree() {
        this.root = null;
    }
    BinarySearchTree.prototype.insert = function (key) {
        this.root = this.insertData(this.root, key);
    };
    BinarySearchTree.prototype.insertData = function (node, key) {
        if (node == null) {
            return new TreeNode_1.default(key);
        }
        if (key < node.getKey()) {
            node.left = this.insertData(node.left, key);
        }
        else if (key > node.getKey()) {
            node.right = this.insertData(node.right, key);
        }
        return node;
    };
    BinarySearchTree.prototype.inorderTraversal = function (node) {
        if (node) {
            this.inorderTraversal(node.left); //left child
            console.log(node.getKey()); //root node
            this.inorderTraversal(node.right); //right node
        }
    };
    return BinarySearchTree;
}());
exports.default = BinarySearchTree;
