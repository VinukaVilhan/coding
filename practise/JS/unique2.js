function unique(array)
{
    if (array.length === 0) return 0;

    var first = 0;
    var second = 1;

    for (let x = 0; x < array.length; x++)
    {
        if(array[first] !== array[second])
        {
            first++;
            array[first] = array[second];
            second++;

        }
        else
        {
            second++;
        }
    }

    return first;
}

console.log(unique([5,5,4,3,2,2,1,0,0]));