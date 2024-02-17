"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var implement_1 = require("./implement");
//an arraystack object
var stack = new implement_1.default();
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
