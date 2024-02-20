"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AVLTree_1 = require("./AVLTree");
//AVLTree object
var avl = new AVLTree_1.default();
avl.insert(1);
avl.insert(5);
avl.insert(7);
avl.inorderTraversal(avl.root);
