class AVLNode
{
    private key: number;
    public left: AVLNode | null;
    public right: AVLNode| null;
    height: number;

    public constructor(key: number)
    {
        this.key = key;
        this.left = null;
        this.right = null;
        this.height = 1;
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

export default AVLNode;