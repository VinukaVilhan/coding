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
                return current;
            }
        }
        return false;
    }

    remove(value) 
    {
        if(this.root === null) 
        {
          return false;
        }
      
        // Find the target node and its parent
        let target = this.root;
        let parent = null;
      
        // Search for the target node and its parent
        while(target && target.value !== value) {
          parent = target;
          if(value < target.value) {
            target = target.left;
          } else {
            target = target.right;
          }
        }
      
        if (target) {
          // Handle cases based on the target node's number of children:
          if (target.left === null && target.right === null) 
          { // Leaf node
            // If root, set root to null; otherwise, update parent's child pointer
            if (target === this.root) 
            {
              this.root = null;
            } 
            else if (parent.left === target) 
            {
              parent.left = null;
            } 
            else 
            {
              parent.right = null;
            }
          } 
          else if (target.left === null || target.right === null) 
          { // One child
            // Promote the child to replace the target
            //if there is a left.child then it's assigned to child otherwise right.child is assigned to child
            let child = target.left ? target.left : target.right;
            
            // The child replaces the root
            if (target === this.root) 
            {
              this.root = child;
            } 
            else if (parent.left === target) 
            {
              parent.left = child;
            } 
            else 
            {
              parent.right = child;
            }
          } 
          else 
          { // Two children
            // Find the in-order successor (smallest node in the right subtree)
            let successor = target.right;
            let successorParent = target;
            while (successor.left) {
              successorParent = successor;
              successor = successor.left;
            }
      
            // Copy successor's value to target node
            target.value = successor.value;
      
            // If successor has a right child, promote it
            if (successorParent === target) {
              successorParent.right = successor.right;
            } else {
              successorParent.left = successor.right;
            }
          }
          return true; // Return true if the node was found and removed
        } 
        else 
        {
          return false; // Return false if the node was not found
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

    //breadth first search
    BFS()
    {
        //two arrays
        var data = [], queue = [];
        var node = this.root;

        queue.push(node);
        //iterates while there is something in the queue
        while(queue.length )
        {
            //moves the first element
            node = queue.shift();
            data.push(node);
            if(node.left )queue.push(node.left);
            if(node.right)queue.push(node.right);
        }
        return data;
    }

    DFSPreOrder()
    {
        var data = [];
        var current = this.root;

        function traverse(node)
        {
            data.push(node);
            if(node.left)traverse(node.left);
            if(node.right)traverse(node.right);
        }

        //invoke the helper function with the current variable
        traverse(current);

        //return array of values
        return data;
    }

    DFSPostOrder()
    {
        //visited nodes
        var data = [];
        //root is stored
        var current = this.root;

        function traverse(node)
        {
            if(node.left)traverse(node.left);
            if(node.right)traverse(node.right);
            data.push(node);
        }
        //invoke function
        traverse(current);
        return data;
    }

    DFSInOrder()
    {
        var visited = [];
        var current = this.root;

        function traverse(node)
        {
            if(node.left)traverse(node.left);
            visited.push(node);
            if(node.right)traverse(node.right);
        }
        //invoke function
        traverse(current);
        return visited;
    }
}

// Create a new Binary Search Tree
var tree = new BinarySearchTree();

tree.insert(10)
tree.insert(6)
tree.insert(15)
tree.insert(3)
tree.insert(8)
tree.insert(20)


console.log(tree.remove(15))
console.log(tree.find(15))
console.log(tree.BFS())
console.log(tree.DFSPreOrder())
console.log(tree.DFSPostOrder())




// Manually insert nodes into the tree
//tree.root = new Node(10)
//tree.root.right = new Node(15)
//tree.root.left = new Node(5)
//tree.root.left.right = new Node(8);


