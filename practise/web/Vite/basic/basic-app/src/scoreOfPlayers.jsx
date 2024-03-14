import { useState } from "react";
import {v4 as uuid} from "uuid";

export default function ScoreOfPlayers()
{
    //creating am array with id  and score 0
    let scoresArray = new Array(10).fill(0);
    let initialized = scoresArray.map(()=> ({id:uuid(),score:0}));
    const [scores, setScores] = useState(initialized);   

    function addScore(id)
    {
        setScores(scores.map(score=> score.id === id ? {...score, score:score.score+1} : score));
    }
    return(
        <>
        {scores.map((score)=> (
            <div key={score.id}>Player: {score.score}
                <button onClick={()=>addScore(score.id)}>Add Score</button>
            </div>
        ))}
        </>
    );
}