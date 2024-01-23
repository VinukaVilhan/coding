function sumRange(number)
{
    //base case
    if(number === 1 ) return 1;
    return number + sumRange(number-1);
    
}

var ans = sumRange(4);
console.log(ans);