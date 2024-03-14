function quickSort(arr, low = 0, high = arr.length - 1) {
    if (low < high) {
      const pivotIndex = partition(arr, low, high);
      quickSort(arr, low, pivotIndex - 1); // Sort left sub-array
      quickSort(arr, pivotIndex + 1, high); // Sort right sub-array
    }
  
    return arr;
  }
  
  function partition(arr, low, high) {
    const pivot = arr[high]; // Choose the last element as the pivot (common choice)
    let i = low - 1;
  
    for (let j = low; j < high; j++) {
      if (arr[j] <= pivot) {
        i++;
        [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements
      }
    }
  
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]]; // Place pivot in its correct position
    return i + 1; // Return the pivot's final index
  }
  
  // Example usage
  const unsortedArray = [5, 3, 8, 1, 9];
  const sortedArray = quickSort(unsortedArray);
  console.log(sortedArray); // Output: [1, 3, 5, 8, 9]
  