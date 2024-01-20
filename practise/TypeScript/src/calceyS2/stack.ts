interface Stack <T>
{
    push(item: T): void;

    pop(): T | undefined;
    
    peek(): T | undefined;
    
    isEmpty(): boolean;

    clear(): void;
}

export default Stack;