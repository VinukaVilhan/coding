function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
      let minIndex = i; // Assume the first element is the minimum
  
      // Find the actual minimum index in the unsorted part
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
  
      // Swap the minimum element with the first element of the unsorted part
      if (minIndex !== i) {
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]; // Destructuring assignment for swapping
      }
    }
  
    return arr;
  }
  
  // Example usage
  const unsortedArray = [5, 3, 8, 1, 9];
  const sortedArray = selectionSort(unsortedArray);
  console.log(sortedArray); // Output: [1, 3, 5, 8, 9]
  