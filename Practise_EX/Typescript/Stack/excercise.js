"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var implement_1 = require("./implement");
var text = "[{()}]";
function balance(text) {
    var excercise = new implement_1.default();
    var pairObj = { '}': '{', ')': '(', ']': '[' };
    //iterate over the cahracters in the text
    for (var _i = 0, text_1 = text; _i < text_1.length; _i++) {
        var char = text_1[_i];
        //checks if the current bracket is a closing bracket (key checking)
        if (char in pairObj) {
            console.log(char);
            //If the current character is a closing bracket, the let top = excercise.pop() || '#'; line pops the top element from the stack. 
            //If the stack is empty, it assigns '#' to top.
            var top_1 = excercise.pop() || '#';
            // checks if the popped element is not the opening bracket that corresponds to the current closing bracket
            if (top_1 !== pairObj[char]) {
                return false;
            }
        }
        else {
            console.log(char);
            excercise.push(char);
        }
    }
    console.log(excercise);
    return excercise.isEmpty();
}
//check if the length matches
if (text.length === 0) {
    console.log("text is empty");
}
else if (text.length % 2 === 0) {
    console.log(balance(text));
}
else {
    console.log("Paranthisis have not been closed properly");
}
