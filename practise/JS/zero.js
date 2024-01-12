function zero(array) {
    var first = 0;
    var last = array.length - 1;

    while (first < last) {
        let sum = array[first] + array[last];
        if (sum === 0) {
            return [array[first], array[last]];
        } else if (sum > 0) {
            last--;
        } else {
            first++;
        }
    }
    return false;
}

console.log(zero([-1,0,1]));  // Output: [-1, 1]
