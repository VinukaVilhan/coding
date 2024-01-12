"use strict";
function testSame() {
    function same(arr1, arr2) {
        if (arr1.length !== arr2.length) {
            return false;
        }
        for (let x = 0; x < arr1.length; x++) {
            let correctIndex = arr2.indexOf(Math.pow(arr1[x], 2));
            if (correctIndex === -1) {
                return false;
            }
            arr2.splice(correctIndex, 1);
        }
        return true;
    }
    let arr1 = [1, 2, 3];
    let arr2 = [1, 4, 9];
    console.log(same(arr1, arr2)); // should print true
}
testSame();
