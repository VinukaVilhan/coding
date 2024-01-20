//fucntion maxSubArraySum() accepts an array of integers and a number called n. The function should calculate maximum number of n consecetive numbers.

function maxSubArraySum(array, n)
{
    var maxSum = 0;
    var tempSum = 0;

    if (array.length < n) return null;
    for(let x = 0; x < n; x++)
    {
        maxSum += array[x];
        console.log('Max Sum: ', maxSum);
    }
    tempSum = maxSum;

    console.log('Max sum: ', maxSum, 'Temp: sum', tempSum);

    for(let i = n; i < array.length; i++ )
    {
        tempSum = tempSum - array[i - n] + array[i];
        console.log('Updating Temp sum: ', tempSum);
        maxSum = Math.max(maxSum, tempSum);    
        console.log('Updating max sum: ', maxSum);
    }
    return maxSum;
}

var sum = maxSubArraySum([1,2,5,6,7,8,3],2);
console.log(sum);