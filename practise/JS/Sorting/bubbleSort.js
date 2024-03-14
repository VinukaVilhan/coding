function bubbleSort(arr)
{
    for(let x = arr.length - 1; x > 0; x--)
    {
        for(let j = 0; j < x ;j++)
        {
            if(arr[j] > arr[j + 1])
            {
                //swap
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }   
    }
    return arr;
}

console.log(bubbleSort([5,3,8,9]))