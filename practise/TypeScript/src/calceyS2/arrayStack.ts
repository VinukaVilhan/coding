import Stack from './stack'

class ArrayStack<T> implements Stack <T>
{
    private stackItems: T[]=[];

    //- private , + public, #protected
    public push(item: T): void
    {
        this.stackItems.push(item);
    }

    public pop():T | undefined
    {
        return this.stackItems.pop();
    }

    public peek(): T| undefined
    {
        return this.stackItems[this.stackItems.length-1];
    }

    public isEmpty(): boolean 
    {
        return this.stackItems.length === 0;
    }

    public clear(): void
    {
        this.stackItems = [];
    }
    
}

export default ArrayStack;