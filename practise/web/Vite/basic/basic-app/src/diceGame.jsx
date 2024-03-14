export default function diceGame()
{
    const num1 = Math.floor(Math. random() * 3 + 1);
    const num2 = Math.floor(Math. random() * 3 + 1);
    const color = {color: num1===num2?"green": "red"}

    return(
        <div>
             {num1 === num2? <h3 style={color}>You WIn!</h3>:<h3 style={color}>You Lose!</h3>}
             <p>Num1: {num1}</p>
             <p>Num2: {num2}</p>
        </div>
    );
   
    
    
    
    
    
    // const result = num1 === num2 ? "You win!" : "You Lose";
    // //conditional logic
    // if(num1 === num2)
    // {
    //     return(
    //         <div>
    //             <h1>{result}</h1>
    //             <p>Num 1: {num1}</p>
    //             <p>Num 2: {num2}</p>
    //         </div>
    //     );
    // } 
    // else
    // {
    //     return(
    //         <div>
    //             <h1>{num1 !== num2? "You Lose! :(":"You Win :)"}</h1>
    //             <p>Num 1: {num1}</p>
    //             <p>Num 2: {num2}</p>
    //         </div>
    //     );
    // }

    
}