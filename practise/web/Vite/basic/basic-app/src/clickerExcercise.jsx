

export default function ClickerExcercise({buttonText, msg})
{
    function handleClick()
    {
        alert(msg);
    }
    return(
        <>
            <button onClick={handleClick}>{buttonText}</button>
        </>
    );
}