export default function Slot({val1, val2, val3})
{
    const isWinner = ((val1 === val2  && val2 === val3) ? 1 : 0);
    const emoji = <><li>{val1}</li> <li>{val2}</li> <li>{val3}</li></>;

    return (
        <>
            {isWinner===1 ? 
                <>
                    <h1 style= {{color: "green"}}>You Win</h1> <div>{emoji}</div>
                </>
                :
                <> 
                    <h1 style={{color:"red"}}>You lose</h1>  <div>{emoji}</div>
                </>
            }
        </>
    );
}