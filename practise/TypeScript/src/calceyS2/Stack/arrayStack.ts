import Stack from './stack'
//<T> is a generic type parameter which indicates that it could work with any type
class ArrayStack<T> implements Stack <T>
{
    //creating an array to store the data
    private stackItems: T[]=[];

    //- private , + public, #protected
    //Takes one parameter item of type T
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