import ArrayStack from "./implement"; 

const text = "[{()}]";

function balance(text : string): boolean
{
    let excercise  =new ArrayStack<any>();
    const pairObj = {'}':'{', ')':'(', ']':'['};

    //iterate over the cahracters in the text
    for(let char of text)
    {
        //checks if the current bracket is a closing bracket (key checking)
        if(char in pairObj)
        {
            console.log(char);
            //If the current character is a closing bracket, the let top = excercise.pop() || '#'; line pops the top element from the stack. 
            //If the stack is empty, it assigns '#' to top.
            let top = excercise.pop() || '#';
            // checks if the popped element is not the opening bracket that corresponds to the current closing bracket
            //gets the associated key value
            if(top !== pairObj[char])
            {
                return false;
            }
        }
        else
        {
            console.log(char);
            excercise.push(char);
        }
    }
    console.log(excercise);
    return excercise.isEmpty();
}

//check if the length matches
if(text.length === 0)
{
    console.log("text is empty");
}
else if(text.length % 2 === 0 )
{
    console.log(balance(text));
}
else
{
    console.log("Paranthisis have not been closed properly");
}