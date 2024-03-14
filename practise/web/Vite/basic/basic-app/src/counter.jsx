import { useState } from "react";
export default function Counter()
{
    const[num, setNum] = useState(1);

    function incrementNum()
    {
        setNum(num+1);
    }
    return(
        <div>
            <p>The count is: {num}</p>
            <button onClick={incrementNum}>Increment</button>
        </div>
    );
}