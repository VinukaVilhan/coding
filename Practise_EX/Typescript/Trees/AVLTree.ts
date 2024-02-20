import AVLNode from "./AVLNode";

class AVLTree
{
    public root: AVLNode | null
    constructor()
    {
        this.root = null;
    }

    //time complexity of getting node height is O(1)
    private getHeight(node: AVLNode | null): number
    {
        return node ? node.height : 0 ;
    }

    private updateHeight(node: AVLNode): void //O(1)
    {
        node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));
    }

    private getBalanceFactor(node: AVLNode) :number //O(1)
    {
        return this.getHeight(node.left) - this.getHeight(node.right);
    }

    public insert(key:number): void
    {
        this.root  = this.insertData(this.root, key);
    }

    private insertData(node: AVLNode | null, key:number): AVLNode //O (log(n))
    {
        //tree insertion logic
        if(!node)
        {
            return new AVLNode(key);
        }
        else if(key < node.getKey())
        {
            node.left = this.insertData(node.left, key);
        }
        else if(key > node.getKey())
        {
            node.right = this.insertData(node.right, key);
        }
        //handling duplicate values
        else
        {
            return node;
        }

        //height update
        this.updateHeight(node);

        //balancing logic
        let balance:number = this.getBalanceFactor(node);
        //left heavy [2 - 1 = 1]
        if(balance > 1)
        {
            //right notation should be implemented
            let select = node.left as AVLNode;//typecast in typescript
            if(key < select.getKey())
            {
                return this.rightRotate(node);
            }
            else
            {
                //implement left right notation
                node.left = this.leftRotate(node.left as AVLNode) ;
                
                return this.rightRotate(node);
            }
        }
        //right heavy [1 - 2 = -1]
        else if(balance < -1)
        {
            //left notation should be implemented
            let select = node.right as AVLNode;//typecast in typescript
            if(key > select.getKey())
            {
                return this.leftRotate(node);
            }
            else
            {
                //implement right left rotation
                node.right = this.rightRotate(node.left as AVLNode) ;
                
                return this.leftRotate(node);
            }
        }
        return node;
    }

    private rightRotate(node: AVLNode): AVLNode // O(1)
    {
        let x: AVLNode = node.left as AVLNode;

        //swapping part
        let y = x.right as AVLNode;

        x.right = node;

        node.left = y;

        this.updateHeight(node);
        this.updateHeight(x);
        return x;
    }

    private leftRotate(node: AVLNode): AVLNode // O(1)
    {
        let x: AVLNode = node.right as AVLNode;

        let y = x.left as AVLNode;

        //swapping part
        x.left = node;

        node.right = y;

        this.updateHeight(node);
        this.updateHeight(x);
        return x;
    }

    public inorderTraversal(node: AVLNode | null): void
    {
        if(node)
        {
            this.inorderTraversal(node.left);//left child
            console.log(node.getKey());//root node
            this.inorderTraversal(node.right);//right node
        }
    }
}

export default AVLTree;