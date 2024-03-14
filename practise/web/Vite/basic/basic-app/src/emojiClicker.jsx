import { useState } from "react";
import {v4 as uuid} from "uuid" ;
export default function EmojiClicker()

{
    const [emojis, setEmoji] = useState([{id:uuid(), emoji:"🤬"}]);
    function addEmoji()
    {
        setEmoji([...emojis, {id:uuid(), emoji:'🥶'}]);
        // setEmoji((oldEmojis) => [...oldEmojis, '🥶']);
    }

    function deleteEmoji(id)
    {
        console.log(id);
        //removes the emoji with the relevant id
       setEmoji( emojis.filter(emoji=> emoji.id !== id));
    }

    return(
        <div>
            {emojis.map((emoji) => {
                console.log(emoji.id);
                return <span key={emoji.id} onClick={() => deleteEmoji(emoji.id)} style={{fontSize:"1rem"}}>{emoji.emoji}</span>;
            })}
            <button onClick={addEmoji}>Add emoji</button>
        </div>
    );
}