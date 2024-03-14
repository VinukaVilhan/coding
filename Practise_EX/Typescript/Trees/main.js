"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BinarySearchTree_1 = require("./BinarySearchTree");
var AVLTree_1 = require("./AVLTree");
console.log('BinarySearchTree');
//binary search tree object
var bst = new BinarySearchTree_1.default();
bst.insert(20);
bst.insert(10);
bst.insert(50);
bst.insert(70);
bst.insert(45);
bst.insert(15);
bst.insert(90);
console.log('postorder traversal');
bst.postorderTraversal(bst.root);
console.log('inorder traversal');
bst.inorderTraversal(bst.root);
console.log('AVLTree');
//AVLTree object
var avl = new AVLTree_1.default();
avl.insert(1);
avl.insert(5);
avl.insert(7);
avl.inorderTraversal(avl.root);
console.log('Postorder traversal');
avl.postorderTraversal(avl.root);
