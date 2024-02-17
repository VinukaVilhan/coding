import ArrayStack from "./arrayStack";

//check if the given context is balanced and relevant
const givenText="{{[]}}";

function isBalanced(text: string):boolean
{
    let stack = new ArrayStack<string>();
    let pair: {[key:string]:string} = { '}':'{', ']':'[', ')':'('};

    for(let char of text)
    {
        if(char in pair) //check only keys in pair (the closing brackets)
        {
            let top = stack.pop() || '#';
            if(top !== pair[char])
            {
                return false;
            }
        }
        else
        {
            stack.push(char); // check only the opening bracket
        }
    }

    return stack.isEmpty();
}


var answer = isBalanced(givenText);
console.log(answer);