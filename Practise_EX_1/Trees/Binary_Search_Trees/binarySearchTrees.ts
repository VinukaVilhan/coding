import TreeNode from "./TreeNode";

class BinarySearchTree
{
    public root: TreeNode | null;

    constructor()
    {
        this.root = null;
    }

    public insert(key:number):void
    {
        this.root = this.insertData(this.root, key);
    }

    private insertData(node: TreeNode | null, key:number ): TreeNode
    {

        //if there is no root the node becomes the root
        if(node == null)
        {
            return new TreeNode(key);
        }

        if(key > node.getKey())
        {
            //check for the right node
            node.right = this.insertData(node.right, key);
        }
        else if (key < node.getKey())
        {
            //check for the left node
            node.left = this.insertData(node.left, key);
        }

        return node;
    }

    public find(key:number):TreeNode|null
    {
        return this.findData(this.root, key);
    }

    private findData(node:TreeNode|null, key:number):TreeNode|null
    {
        if(node==null)
        {
            return null;
        }

        if(key > node.getKey())
        {
            return this.findData(node.right, key);
        }
        else if(key < node.getKey())
        {
            return this.findData(node.left, key);
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

    public postorderTraversal(node: TreeNode | null): void
    {
        if(node)
        {
            this.inorderTraversal(node.left);//left child
            this.inorderTraversal(node.right);//right node
            console.log(node.getKey());//root node
        }
    }
    
}

export default BinarySearchTree;