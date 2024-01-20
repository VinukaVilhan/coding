"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var arrayStack_1 = require("../../src/calceyS2/arrayStack");
//check if the given context is balanced and relevant
var givenText = "{{[]}}";
function isBalanced(text) {
    var stack = new arrayStack_1.default();
    var pair = { '}': '{', ']': '[', ')': '(' };
    for (var _i = 0, text_1 = text; _i < text_1.length; _i++) {
        var char = text_1[_i];
        if (char in pair) //check only keys in pair (the closing brackets)
         {
            var top_1 = stack.pop() || '#';
            if (top_1 !== pair[char]) {
                return false;
            }
        }
        else {
            stack.push(char); // check only the opening bracket
        }
    }
    return stack.isEmpty();
}
var answer = isBalanced(givenText);
console.log(answer);
