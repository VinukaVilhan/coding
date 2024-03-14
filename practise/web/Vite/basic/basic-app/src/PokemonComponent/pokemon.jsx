import "./pokemon.css"
export default function Pokemon()
{
    const number= Math.floor(Math.random()*100 + 1);
    return (
        <>
            <div className = "container">
                <h1>Random Pokemon Number: #{number}</h1>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${number}.png`}/>
            </div>
        </>
    );
}