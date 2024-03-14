function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
      let key = arr[i];
      let j = i - 1;
  
      // Shift elements of the sorted portion one by one while the current element is greater
      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j--;
      }
  
      // Insert the key at its correct position in the sorted portion
      arr[j + 1] = key;
    }
  
    return arr;
  }
  
  // Example usage
  const unsortedArray = [5, 3, 8, 1, 9];
  const sortedArray = insertionSort(unsortedArray);
  console.log(sortedArray); // Output: [1, 3, 5, 8, 9]
  