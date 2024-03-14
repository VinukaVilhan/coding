function binarySearch(arr, value)
{

    //pointeres at the end and beginning of the array
    var left = 0;
    var right = arr.length - 1;

    //while left pointer comes before right pointer
    while(left  <= right)
    {
        //create the pointer in the middle
        const middle = Math.floor((left + right)/2);

        //if value found return the index
        if(value === arr[middle])
        {
            return middle;
        }
        else if(arr[middle]  < value)
        {
            left = middle + 1;
        }
        else
        {
            right = middle - 1;
        }
    }
    return false;
}


console.log(binarySearch([1,2,3,4,5,6,], 6));