function mergeSort(arr) {
    // Base case: If the array has only one element, it's already sorted.
    if (arr.length <= 1) {
      return arr;
    }
  
    // Divide the array into two halves
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
  
    // Recursively sort the left and right halves
    const leftSorted = mergeSort(left);
    const rightSorted = mergeSort(right);
  
    // Merge the sorted halves back together
    return merge(leftSorted, rightSorted);
  }
  
  function merge(left, right) {
    const merged = [];
    let i = 0;
    let j = 0;
  
    // Compare elements from both arrays and add the smaller one to the merged array
    while (i < left.length && j < right.length) {
      if (left[i] < right[j]) {
        merged.push(left[i]);
        i++;
      } else {
        merged.push(right[j]);
        j++;
      }
    }
  
    // Add any remaining elements from the left or right array
    merged.push(...left.slice(i));
    merged.push(...right.slice(j));
  
    return merged;
  }
  
  // Example usage
  const unsortedArray = [5, 3, 8, 1, 9];
  const sortedArray = mergeSort(unsortedArray);
  console.log(sortedArray); // Output: [1, 3, 5, 8, 9]