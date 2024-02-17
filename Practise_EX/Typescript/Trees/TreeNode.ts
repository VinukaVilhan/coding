class TreeNode
{
    private key: number;
    public left: TreeNode | null;
    public right: TreeNode| null;

    public constructor(key: number)
    {
        this.key = key;
        this.left = null;
        this.right = null;
    }

    public setKey(key : number) :void
    {
        this.key = key;
    }

    public getKey()
    {
        return this.key;
    }
}

export default TreeNode;