//given a sorted array of integers, a function should return the index of the array of the given value.
function search(arr, n) {
    let start = 0;//first index
    let end = arr.length - 1;//last index

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (arr[mid] === n) {
            return mid;
        } else if (arr[mid] > n) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }

    return -1; // Value not found
}

var index = search([1, 2, 3, 4, 5, 6, 7, 8, 9], 9);
console.log(index);
