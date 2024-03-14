import AVLTreeNode from "./AVLtreeNode";

class AVLSearchTree
{
    public root: AVLTreeNode | null;
    constructor()
    {
        this.root = null;
    }

    private getHeight(node:AVLTreeNode|null):number
    {
        return node? node.height: 0;
    }

    private updateHeight(node:AVLTreeNode):void
    {
         1 + Math.max(this.getHeight(node.left),this.getHeight(node.right));
    }

    private getBalanceFactor(node:AVLTreeNode):number
    {
        return ( this.getHeight(node.left) - this.getHeight(node.right) );
    }

    public insert(key:number): void
    {
        this.root  = this.insertData(this.root, key);
    }

    private insertData(node: AVLTreeNode | null, key:number): AVLTreeNode //O (log(n))
    {
        //tree insertion logic
        if(!node)
        {
            return new AVLTreeNode(key);
        }
        //if the value we enter (key) is less than the key we refer to it goes to the left side
        else if(key < node.getKey())
        {
            node.left = this.insertData(node.left, key);
        }
        //if the value we enter (key) is greater than the key we refer to it goes to the right side
        else if(key > node.getKey())
        {
            node.right = this.insertData(node.right, key);
        }
        //handling duplicate values
        else
        {
            return node;
        }

        this.updateHeight(node);

        let balancingFactor:number = this.getBalanceFactor(node);

        if(balancingFactor > 1)
        {
            let select = node.left as AVLTreeNode; 

            if(key < select.getKey())
            {
                return this.rightRotate(node);
            }
            else
            {
                node.left = this.leftRotate(node.left as AVLTreeNode);

                return this.leftRotate(node); 
            }
        }
        else if(balancingFactor < -1)
        {
            let select = node.right as AVLTreeNode; 

            if(key < select.getKey())
            {
                return this.leftRotate(node);
            }
            else
            {
                node.left = this.rightRotate(node.left as AVLTreeNode);

                return this.rightRotate(node); 
            }
        }
        return node;
    }

    //left rotation
    private leftRotate(node:AVLTreeNode):AVLTreeNode
    {
        var y:AVLTreeNode = node.right as AVLTreeNode;

        var x:AVLTreeNode =  y.left as AVLTreeNode;

        //swap
        y.right = node;

        node.left = x;

        this.updateHeight(node);
        this.updateHeight(x);
        return x;
    }

    //left rotation
    private rightRotate(node:AVLTreeNode):AVLTreeNode
    {
        var y:AVLTreeNode = node.left as AVLTreeNode;

        var x:AVLTreeNode =  y.right as AVLTreeNode;

        //swap
        y.left = node;

        node.right = x;

        this.updateHeight(node);
        this.updateHeight(x);
        return x;
    }

    public postOrderTraversal(node:AVLTreeNode|null):void
    {
        if(node)
        {
            this.postOrderTraversal(node.left);
            this.postOrderTraversal(node.right);
            console.log(node.getKey())

        }
    }


}


export default AVLSearchTree;