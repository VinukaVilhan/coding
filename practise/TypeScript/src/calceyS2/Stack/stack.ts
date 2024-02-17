interface Stack <T>
{
    //method return noting
    push(item: T): void;

    //The pop method is used to remove the top item from the stack and return it. If the stack is empty, it returns undefined.
    pop(): T | undefined;
    
    //
    peek(): T | undefined;
    
    isEmpty(): boolean;

    clear(): void;
}

//line exports the Stack interface as the default export of this module. 
//This means that other modules can import this interface using a simple import statement.
export default Stack;