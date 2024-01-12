"use strict";
function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
    for (let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }
    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }
    for (let key in frequencyCounter1) {
        if (!(`${Math.pow(Number(key), 2)}` in frequencyCounter2)) {
            return false;
        }
        if (frequencyCounter2[`${Math.pow(Number(key), 2)}`] !== frequencyCounter1[key]) {
            return false;
        }
    }
    return true;
}
let arr1 = [1, 2, 3];
let arr2 = [1, 4, 9];
console.log(same(arr1, arr2)); // should print true
