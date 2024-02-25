function sortedFrequency(arr , value){
    // add whatever parameters you deem necessary - good luck!
    
    //divide and conquer approach
    var left = 0;
    var right = arr.length - 1;
    var count = 0;
    
    while(left <= right)
    {
        //get the midpoint
        var mid = Math.floor((left + right)/2);
        //check against the mid point
        if(arr[mid] < value)
        {
            //update left
            left = mid + 1;
        }
        
        else if(arr[mid] > value)
        {
            //update right
            right = mid - 1;
        }
        else
        {
            //increment the count
            count++;
            
            //iteration preparation
            var lIndex = mid - 1;
            var rIndex = mid + 1;
            
            //while loop for the left
            while(lIndex >= 0 && arr[lIndex] === value)
            {
                count++;
                lIndex--;
            }
            
            //while loop the right
            while(rIndex < arr.length && arr[rIndex] === value)
            {
                count++;
                rIndex++;
            }
            return count;
        }
    }
    return -1;
  }
  
  console.log(sortedFrequency([1,1,2,2,2,2,3],2))
  