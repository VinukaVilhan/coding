
function handleSubmit(event)
{
    event.preventDefault();
}


export default function Form() 
{
    return(
        <form onSubmit={handleSubmit}>
            <button>submit</button>
        </form>
    );
}