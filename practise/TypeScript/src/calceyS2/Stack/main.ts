import ArrayStack from "./arrayStack";

let stack = new ArrayStack<number>();
stack.push(25);
stack.push(50);
stack.push(75.5);

console.log(stack);
console.log('popping the top element: ', stack.pop());
console.log(stack);
console.log('peek the top element: ', stack.peek() );
console.log(stack);
console.log("check if it is empty: ", stack.isEmpty());
console.log(stack);
console.log('Clear the aray: ', stack.clear());
console.log(stack);