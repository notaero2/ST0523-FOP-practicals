/**
 * Given a large array of integers, we want to zoom out by a certain level.
 * This means that we want to group the integers into subarrays of a certain size, and then take the average of each subarray.
 * The result will be an array of the averages of each subarray.
 *
 * @param {number[]} array - An array of integers.
 * @param {number} zoomLevel - The size of each subarray.
 *
 * @returns {number[]} - An array of the averages of each subarray.
 *
 * @example
 * zoomOut([1, 2, 3, 4, 5, 6, 7, 8], 2); // [1.5, 3.5, 5.5, 7.5]
 * zoomOut([1, 2, 3, 4, 5, 6, 7, 8], 3); // [2, 5, 7.5]
 *
 * @explanation
 * For the first example, we group the integers into subarrays of size 2: [1, 2], [3, 4], [5, 6], [7, 8].
 * The averages of these subarrays are 1.5, 3.5, 5.5, 7.5.
 * For the second example, we group the integers into subarrays of size 3: [1, 2, 3], [4, 5, 6], [7, 8].
 * The averages of these subarrays are 2, 5, 7.5.
 *
 * @hint
 * This uses nested for-loop
 */
function zoomOut(array, zoomLevel) {
    let groups = []
    let total = 0
    let avgs = []
    
    for (let startIndex = 0; startIndex < array.length; startIndex += zoomLevel) {
        groups.push(array.slice(startIndex, startIndex+zoomLevel))
    }

    for (let groupIndex = 0; groupIndex < groups.length; groupIndex++) {
        total = 0
        for (let i = 0; i < groups[groupIndex].length; i++) {
            total += groups[groupIndex][i]
        }
        avgs.push(total/groups[groupIndex].length)
    }
    return avgs
}

// Your own test cases
// e.g.;

console.log(zoomOut([1, 2, 3, 4, 5, 6, 7, 8], 2));

// To test your code against the test cases: node run.js q5
// To test your code against custom input: node ./q5/code.js

module.exports = zoomOut;
