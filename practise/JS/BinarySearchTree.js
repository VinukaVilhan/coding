// Node class represents each node in the tree
class Node
{
    constructor(value)
    {
        this.value = value; // the value stored in the node
        this.left = null; // reference to the left child node
        this.right = null; // reference to the right child node
    }
}

// BinarySearchTree class represents the entire tree
class BinarySearchTree
{
    constructor()
    {
        this.root = null; // root of the tree, starts as null
    }

    // Method to insert a new value into the tree
    insert(val)
    {
        var newNode = new Node(val); // create a new node with the given value

        // if the tree is empty, make the new node the root
        if(!this.root)
        {
            this.root = newNode;
            return this;
        }
        else
        {
            var current = this.root; // start at the root

            // continue looping until the correct spot for the node is found
            while(true)
            {
                // if the new value is less than the current node's value, go left
                if(val < current.value)
                {
                    // if there's no left child, insert the new node here
                    if(current.left === null)
                    {
                        current.left = newNode;
                        return this;
                    }
                    // if there is a left child, move to that node and continue
                    else
                    {
                        current = current.left;
                    }
                }
                // if the new value is greater than the current node's value, go right
                else if(val > current.value)
                {
                    // if there's no right child, insert the new node here
                    if(current.right === null)
                    {
                        current.right = newNode;
                        return this;
                    }
                    // if there is a right child, move to that node and continue
                    else
                    {
                        current  = current.right;
                    }
                }
                else // val is equal to current.value
                {
                    // Ignore the value and return
                    return this;
                }
            }
        }
    }

    find(val)
    {
        //finds out if there is a root
        if(!this.root)
        {
            return false;
        }

        var current  = this.root;
        var found = false;

        //iterates while there is a node and false is assigned as false
        while(current && !found)
        {
            //check to see the right node
            if(val > current.value)
            {
                //moves to the next node
               current = current.right;
            }
            //check to see the left node
            else if (val < current.value)
            {
                //moves to the next node
                current = current.left;
            }
            else if (current.value  === val)
            {
                found = true;
                return current.value;
            }
        }
    }
    
    // In-order traversal
    // This method visits all the nodes of a BST in ascending order
    inOrder(node = this.root) {
        if(node !== null) { // if the node exists
            this.inOrder(node.left); // recursively go to the left child
            console.log(node.value); // print the value of the node
            this.inOrder(node.right); // recursively go to the right child
        }
    }
}

// Create a new Binary Search Tree
var tree = new BinarySearchTree();

tree.insert(10)
tree.insert(15)
tree.insert(2)
tree.insert(8)
console.log(tree.find(2))
console.log(tree.find(7))
console.log(tree)



// Manually insert nodes into the tree
//tree.root = new Node(10)
//tree.root.right = new Node(15)
//tree.root.left = new Node(5)
//tree.root.left.right = new Node(8);

// Print the tree using in-order traversal
tree.inOrder();
