import TreeNode from "./TreeNode";

class BinarySearchTree
{
    public root: TreeNode | null;
    constructor()
    {
        this.root = null;
    }

    public insert(key: number): void
    {
        this.root  = this.insertData(this.root , key);
    }

    private insertData(node: TreeNode | null, key: number): TreeNode 
    {
        if(node == null)
        {
            return new TreeNode(key);
        }


        if(key < node.getKey())
        {
            node.left = this.insertData(node.left, key); 
        }
        else if(key > node.getKey())
        {
            node.right = this.insertData(node.right, key);
        }

        return node;
    }

    public inorderTraversal(node: TreeNode | null): void
    {
        if(node)
        {
            this.inorderTraversal(node.left);//left child
            console.log(node.getKey());//root node
            this.inorderTraversal(node.right);//right node
        }
    }

    public postorderTraversal(node: TreeNode | null): void {
        if (node) {
          this.postorderTraversal(node.left); // Left child
          this.postorderTraversal(node.right); // Right child
          console.log(node.getKey()); // Visit the root after processing children (post-order)
        }
      }
    
    // Added Preorder Traversal
    public preorderTraversal(node: TreeNode | null): void {
        if (node) {
          console.log(node.getKey()); // Visit the root before processing children (pre-order)
          this.preorderTraversal(node.left); // Left child
          this.preorderTraversal(node.right); // Right child
        }
      }
}

export default BinarySearchTree;