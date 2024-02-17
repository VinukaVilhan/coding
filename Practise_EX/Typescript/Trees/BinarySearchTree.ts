import TreeNode from "./TreeNode";

class BinarySearchTree
{
    root: TreeNode | null;
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
            
        }
    }
}

export default BinarySearchTree;