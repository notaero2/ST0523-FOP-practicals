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
function combineAndSort(sortedArray1, sortedArray2) {}

// Your own test cases
// e.g.;

console.log(combineAndSort([1, 3, 5], [2, 4, 6]));

// To test your code against the test cases: node run.js q2
// To test your code against custom input: node ./q2/code.js

module.exports = combineAndSort;
