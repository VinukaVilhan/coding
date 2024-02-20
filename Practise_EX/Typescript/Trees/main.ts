import BinarySearchTree from "./BinarySearchTree";
import AVLTree from "./AVLTree";

//AVLTree object
var avl = new AVLTree();

avl.insert(1);
avl.insert(5);
avl.insert(7);

avl.inorderTraversal(avl.root);