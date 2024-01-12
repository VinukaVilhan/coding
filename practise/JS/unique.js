function unique(array)
{
    var counts = {};

    for (let value of array)
    {
        counts[value] = (counts[value] || 0 ) + 1;
        if (counts[value] > 1)
        {
            //remove the key-value pair
            counts[value] = 1;
        }
    }

    var sum = Object.keys(counts).length;

    return sum;
}

console.log(unique([-5,-1,0,1,3,4]));