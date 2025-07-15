/**
 * Given a array of number, check if they are either
 * 1. Ascending - each element is greater than the previous
 * 2. Non-descending - each element is greater than or equal to the previous
 * 3. Descending - each element is lesser than the previous
 * 4. Non-ascending - each element is lesser than or equal to the previous
 * 6. Constant - all elements are the same
 * 5. Unsorted - none of the above
 *
 * @param {number[]} array - An array of numbers.
 * @returns {string} - The type of the array.
 *
 * @example
 * checkArray([1, 2, 3, 4, 5]); // 'Ascending'
 * checkArray([5, 4, 3, 2, 1]); // 'Descending'
 * checkArray([1, 1, 1, 1, 1]); // 'Constant'
 * checkArray([1, 2, 2, 3, 4]); // 'Non-descending'
 * checkArray([5, 4, 4, 3, 2]); // 'Non-ascending'
 * checkArray([1, 2, 4, 3, 5]); // 'Unsorted'
 */
function checkArray(array) {
    let arrayCheck = [true, true, true, true, true] //asc, desc, const, non-desc, non-asc
    for (let i = 1; i < array.length; i++) {
        if (array[i] > array[i-1]) { //ascending between 2 adj numbers
            arrayCheck[1] = false
            arrayCheck[2] = false
            arrayCheck[4] = false
        }
        if (array[i] < array[i-1]) { //descending between 2 adj numbers
            arrayCheck[0] = false
            arrayCheck[2] = false
            arrayCheck[3] = false
        }
        if (array[i] == array[i-1]) { //const between 2 adj numbers
            arrayCheck[0] = false
            arrayCheck[1] = false
        }
    }
    if (arrayCheck[0]) {
        return 'Ascending'
    } else if (arrayCheck[1]) {
        return 'Descending'
    } else if (arrayCheck[2]) {
        return 'Constant'
    } else if (arrayCheck[3]) {
        return 'Non-descending'
    } else if (arrayCheck[4]) {
        return 'Non-ascending'
    } else {
        return 'Unsorted'
    }
}

// Your own test cases
// e.g.;

console.log(checkArray([1, 2, 3, 4, 5])); // 'Ascending'

// To test your code against the test cases: node run.js q4
// To test your code against custom input: node ./q4/code.js

module.exports = checkArray;
