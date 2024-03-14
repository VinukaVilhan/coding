//tree node is creted. for 

class AVLTreeNode
{
    //value declaration
    private key: number;
    public left: AVLTreeNode | null;
    public right: AVLTreeNode | null;
    public height: number;


    //constructor
    public constructor(key:number)
    {
        this.key = key;
        this.left = null;
        this.right = null;
        this.height = 1;
    }

    public setKey(key:number):void
    {
        this.key = key;
    }

    public getKey()
    {
        return this.key;
    }
}

export default AVLTreeNode;