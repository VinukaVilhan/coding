import Stack from './interface'

class ArrayStack<T> implements Stack<T>
{
    private itemList : T[] = [];

    public push(item: T): void
    {
        this.itemList.push(item);
    }
    //removes the last element from the array
    public pop(): T | undefined
    {
        return this.itemList.pop();
    }

    public peek(): T | undefined
    {
        return this.itemList[this.itemList.length - 1];
    }

    public isEmpty(): boolean 
    {
        if(this.itemList.length == 0 )
        {
            return true;
        }
        else 
        {
            return false;
        }
    }

    public clear(): void 
    {
        this.itemList = [];    
    }
}

export default ArrayStack;