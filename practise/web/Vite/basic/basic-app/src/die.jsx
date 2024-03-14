/* eslint-disable react/prop-types */
import "./die.css";

//sides = 6 is a default value if it does not have any side  
export default function Die({sides = 6}) {
    const roll = Math.floor(Math.random()*sides);
    return <h1 className="dice">{sides}- Die Roll!: {roll}</h1>
}
