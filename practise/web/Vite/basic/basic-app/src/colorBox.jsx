import { useState } from "react";

export default function ColorBox({Color})

{
    const [color, setColor] = useState("black");
    const style= {border:"2px solid white", padding:"1em", margin:"auto", width:"10%", height:'10%', backgroundColor:color};
    function colorChange()
    {
        //generate random number
        let random = Math.floor(Math.random()* Color.length);
        //pick the color according to the number for the array
        setColor(Color[random]);
    }
    return(
        <div style={style} onClick={colorChange}></div>
    );
}