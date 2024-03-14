"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AVLNode_1 = require("./AVLNode");
var AVLTree = /** @class */ (function () {
    function AVLTree() {
        this.root = null;
    }
    //time complexity of getting node height is O(1)
    AVLTree.prototype.getHeight = function (node) {
        return node ? node.height : 0;
    };
    AVLTree.prototype.updateHeight = function (node) {
        node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));
    };
    AVLTree.prototype.getBalanceFactor = function (node) {
        return this.getHeight(node.left) - this.getHeight(node.right);
    };
    AVLTree.prototype.insert = function (key) {
        this.root = this.insertData(this.root, key);
    };
    AVLTree.prototype.insertData = function (node, key) {
        //tree insertion logic
        if (!node) {
            return new AVLNode_1.default(key);
        }
        //if the value we enter (key) is less than the key we refer to it goes to the left side
        else if (key < node.getKey()) {
            node.left = this.insertData(node.left, key);
        }
        //if the value we enter (key) is greater than the key we refer to it goes to the right side
        else if (key > node.getKey()) {
            node.right = this.insertData(node.right, key);
        }
        //handling duplicate values
        else {
            return node;
        }
        //height update
        this.updateHeight(node);
        //balancing logic
        var balance = this.getBalanceFactor(node);
        //left heavy [2 - 1 = 1]
        if (balance > 1) {
            //right rotation should be implemented
            var select = node.left; //typecast in typescript
            if (key < select.getKey()) {
                return this.rightRotate(node);
            }
            else {
                //implement left right notation
                node.left = this.leftRotate(node.left);
                return this.rightRotate(node);
            }
        }
        //right heavy [1 - 2 = -1]
        else if (balance < -1) {
            //left notation should be implemented
            var select = node.right; //typecast in typescript
            if (key > select.getKey()) {
                return this.leftRotate(node);
            }
            else {
                //implement right left rotation
                node.right = this.rightRotate(node.left);
                return this.leftRotate(node);
            }
        }
        return node;
    };
    AVLTree.prototype.rightRotate = function (node) {
        var x = node.left;
        //swapping part
        var y = x.right;
        x.right = node;
        node.left = y;
        this.updateHeight(node);
        this.updateHeight(x);
        return x;
    };
    AVLTree.prototype.leftRotate = function (node) {
        var x = node.right;
        var y = x.left;
        //swapping part
        x.left = node;
        node.right = y;
        this.updateHeight(node);
        this.updateHeight(x);
        return x;
    };
    AVLTree.prototype.inorderTraversal = function (node) {
        if (node) {
            this.inorderTraversal(node.left); //left child
            console.log(node.getKey()); //root node
            this.inorderTraversal(node.right); //right node
        }
    };
    AVLTree.prototype.postorderTraversal = function (node) {
        if (node) {
            this.postorderTraversal(node.left); // Left child
            this.postorderTraversal(node.right); // Right child
            console.log(node.getKey()); // Visit the root after processing children (post-order)
        }
    };
    // Added Preorder Traversal
    AVLTree.prototype.preorderTraversal = function (node) {
        if (node) {
            console.log(node.getKey()); // Visit the root before processing children (pre-order)
            this.preorderTraversal(node.left); // Left child
            this.preorderTraversal(node.right); // Right child
        }
    };
    return AVLTree;
}());
exports.default = AVLTree;
