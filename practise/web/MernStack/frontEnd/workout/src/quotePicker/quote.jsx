import { useEffect, useState } from "react";
const RANDOM_QUOTE_URL = "https://inspo-quotes-api.herokuapp.com/quotes/random";

export default function QuoteFetcher() {
    const [quote, setQuote] = useState({text:"", author:""})

    useEffect(()=> {
        fetchAndSetQuote();
        }, []);

    async function fetchAndSetQuote() {
        const response = await fetch(RANDOM_QUOTE_URL);
        const jsonResponse = await response.json();
        const randomQuote = jsonResponse.quote;
        console.log(randomQuote);
        setQuote(randomQuote);
    }
    
    return (
    <div>
        <button onClick={fetchAndSetQuote}>Get Quote Using handler</button>
        <h1>{quote.text}</h1>
        <h2>{quote.author}</h2>
    </div>);
}