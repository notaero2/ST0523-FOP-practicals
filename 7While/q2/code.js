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
 *
 * @hint
 * You can gradually interleave the 2 arrays together:
 * combined: []
 * 1: [1, 3, 5], 2:[2, 4, 6]
 * Since 1 is smaller than 2, we can put 1 into the combined array first
 *
 * combined: [1]
 * 1: [3, 5], 2:[2, 4, 6]
 * Since 2 is smaller than 3, we can put 2 into the combined array
 *
 * combined: [1, 2]
 * 1: [3, 5], 2:[4, 6]
 * Since 3 is smaller than 4, we can put 3 into the combined array
 *
 * combined: [1, 2, 3]
 * 1: [5], 2:[4, 6]
 * Since 4 is smaller than 5, we can put 4 into the combined array
 *
 * combined: [1, 2, 3, 4]
 * 1: [5], 2:[6]
 * Since 5 is smaller than 6, we can put 5 into the combined array
 *
 * combined: [1, 2, 3, 4, 5]
 * 1: [], 2:[6]
 * Since there is nothing else in the first, array we can put 6 into the combined array
 *
 * final: [1,2,3,4,5,6]
 */
function combineAndSort(sortedArray1, sortedArray2) {
    let combinedArray = []
    let index1 = 0
    let index2 = 0
    
    while (index1 < sortedArray1.length || index2 < sortedArray2.length) {
        if (index1 >= sortedArray1.length) {
            combinedArray.push(sortedArray2[index2])
            index2++
        } else if (index2 >= sortedArray2.length) {
            combinedArray.push(sortedArray1[index1])
            index1++
        } else if (sortedArray1[index1] <= sortedArray2[index2]) {
            combinedArray.push(sortedArray1[index1])
            index1++
        } else {
            combinedArray.push(sortedArray2[index2])
            index2++
        }
    }
    return combinedArray
}

// Your own test cases
// e.g.;

console.log(combineAndSort([1, 3, 5], [2, 4, 6]));

// To test your code against the test cases: node run.js q2
// To test your code against custom input: node ./q2/code.js

module.exports = combineAndSort;
