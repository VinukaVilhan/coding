//check's for the short string in the long string
function search(long, short)
{
    count = 0;
    for (var i = 0; i < long.length; i++)
    {
        for (var j = 0; j  < short.length; j++)
        {
            console.log(long[i+j],short[j]);
            if(short[j] !== long[i+j])
            {
                console.log("break");
                break;
            }
            if( j === short.length -1)
            {
                console.log("Found one");
                count++;
            }
        }
    }
    return count;
}

search('lolli low lol lowlloy looollly', 'lol');