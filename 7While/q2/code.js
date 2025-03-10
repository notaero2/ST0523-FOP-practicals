/**
 * Given two sorted arrays, combine them into one sorted array
 *
 * @param {number[]} sortedArray1 - A sorted array of numbers
 * @param {number[]} sortedArray2 - A sorted array of numbers
 * @returns {number[]} - A sorted array of numbers
 *
 * @example
 * combineAndSort([1, 3, 5], [2, 4, 6]); // [1, 2, 3, 4, 5, 6]
 * combineAndSort([1, 11, 27, 39], [9, 10, 15, 17]); // [1, 9, 10, 11, 15, 17, 27, 39]
 *
 * You are not allowed to use Array.sort() and Array.toSorted() method
 */
function combineAndSort(sortedArray1, sortedArray2) {
    let result = [];
    let i = 0;
    let j = 0;
    while (i < sortedArray1.length && j < sortedArray2.length) {
        if (sortedArray1[i] < sortedArray2[j]) {
            result.push(sortedArray1[i]);
            i++;
        } else {
            result.push(sortedArray2[j]);
            j++;
        }
    }
    while (i < sortedArray1.length) {
        result.push(sortedArray1[i]);
        i++;
    }
    while (j < sortedArray2.length) {
        result.push(sortedArray2[j]);
        j++;
    }
    return result;
}

// Your own test cases
// e.g.;

console.log(combineAndSort([1, 3, 5], [2, 4, 6]));

// To test your code against the test cases: node run.js q1
// To test your code against custom input: node ./q1/code.js

module.exports = combineAndSort;
