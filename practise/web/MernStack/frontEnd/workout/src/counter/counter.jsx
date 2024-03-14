import { useState } from "react";
import Button from '@mui/material/Button';
import './counter.css'

export default function Counter()
{
    const[count, setCount]=useState(0)

    function incrementCount()
    {
        setCount(count+1)
    }
    return(
        <div className="wrap">
            <h1 style={{textAlign:"left"}}>{count}</h1>
            <Button onClick={incrementCount} variant="text">Text</Button>
        </div>
    );
}