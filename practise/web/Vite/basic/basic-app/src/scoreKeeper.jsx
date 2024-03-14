import { useState } from "react";

function ScoreKeeper()
{
    const [scores, setScores] = useState({p1Score:0, p2Score:0});
    function increasep1Score()
    {
        //copies the items form the scores to the new object
        let newScores = {...scores, p1Score:scores.p1Score + 1};
        setScores(newScores);
    }

    function increasep2Score()
    {
        setScores((oldScores)=> {
            return {...oldScores, p2Score: oldScores.p2Score + 1};
        })
    }

    return(
        <div>
            <button onClick={increasep1Score}>Player 1: {scores.p1Score}</button>
            <button onClick={increasep2Score}>Player 2: {scores.p2Score}</button>
        </div>
    );
}

export default ScoreKeeper;