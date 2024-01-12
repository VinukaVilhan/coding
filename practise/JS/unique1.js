function unique(array)
{

    if (array.length === 0) return 0;

    var counts = 1;

    for (let x = 1 ; x < array.length; x++)
    {
        if( array[x] !== array[x - 1])
        {
            counts++;
        }
    }
    return counts;
}

console.log(unique([-5,-1,0,1,3,4]));