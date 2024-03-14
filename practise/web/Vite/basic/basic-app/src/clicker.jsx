import { useState } from "react";

function handleClick()
{
    console.log("clicked");
}

export default function Clicker()
{
    const [color, setColor] = useState('black');
    function handleMouseOver()
    {
        setColor("red");
    }

    function handleMouseOut()
    {
        setColor("black");
    }

    
    return (
        <div>
            <p style={{color:color}} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Click the button</p>
            <button onClick={handleClick}>Click</button>
        </div>
    );
}