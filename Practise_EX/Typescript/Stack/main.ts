import ArrayStack from "./implement";

//an arraystack object
let stack  =new ArrayStack<any>();
stack.push(25);
stack.push('vinuka');
stack.push(5.5);


console.log(stack);
console.log(stack.peek());
console.group(stack.pop());
console.log(stack);
console.log(stack.isEmpty());
stack.clear();
console.log(stack);