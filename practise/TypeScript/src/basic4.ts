// Checks the count of characters in a string
function charCounter(words: string) {
    var set: {[key:string]: number} = {};

    words = words.toLowerCase();

    // Store current time as `start`
    let start = new Date().getTime();

    for(let char of words)
    {
        if (char.match(/[a-z0-9]/i))
        {
            if(set[char])
            {
                set[char]++;
            }
            else
            {
                set[char]=1;
            }
        }
    }
    // Calculate elapsed time
    let elapsed = new Date().getTime() - start;
    console.log(`Execution time: ${elapsed} milliseconds`);
    return set;
}

console.log(charCounter("hello I AM @ YOUR Hero"));
