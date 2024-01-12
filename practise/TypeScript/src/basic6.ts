function same(arr1: number[], arr2: number[]): boolean {
    if (arr1.length !== arr2.length) {
        return false;
    }
    let frequencyCounter1: {[key: string]: number} = {};
    let frequencyCounter2: {[key: string]: number} = {};
    for (let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }
    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }
    for (let key in frequencyCounter1) {
        if (!(`${Number(key) ** 2}` in frequencyCounter2)) {
            return false;
        }
        if (frequencyCounter2[`${Number(key) ** 2}`] !== frequencyCounter1[key]) {
            return false;
        }
    }
    return true;
}

let arr1: number[] = [1, 2, 3];
let arr2: number[] = [1, 4, 9];
console.log(same(arr1, arr2));  // should print true
