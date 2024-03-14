import { useState } from "react";

function generateGameBoard()
{
    return Array(500);
}

export default function GameBoard()
{
    const [borad, setBoard] =  useState(generateGameBoard());
    return <button onClick={()=>setBoard("hello")}>Click to change state.</button>
}