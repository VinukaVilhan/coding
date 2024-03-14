import { useState } from "react";

export default function Toggler()
{
    const [isHappy, setMood] = useState(true);
    //toggle is happy
    const toggleIsHappy = () => setMood(!isHappy);
    return(
        <p onClick={toggleIsHappy}>{isHappy? "😂":"🥹"}</p>
    );
}