interface Stack<T>
{
    push(item : T): void;
    pop(): T | undefined;
    //return the last element of the array
    peek(): T| undefined;
    isEmpty(): boolean;
    clear(): void;

}

export default Stack;