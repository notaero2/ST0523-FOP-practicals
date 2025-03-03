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
    let asc = true;
    let nonDesc = true;
    let desc = true;
    let nonAsc = true;
    let constant = true;
    for (let i = 1; i < array.length; i++) {
        if (array[i] > array[i - 1]) {
            desc = false;
            nonAsc = false;
            constant = false;
        } else if (array[i] < array[i - 1]) {
            asc = false;
            nonDesc = false;
            constant = false;
        } else {
            asc = false;
            desc = false;
        }
    }
    if (constant) {
        return 'Constant';
    } else if (asc) {
        return 'Ascending';
    } else if (desc) {
        return 'Descending';
    } else if (nonDesc) {
        return 'Non-descending';
    } else if (nonAsc) {
        return 'Non-ascending';
    } else {
        return 'Unsorted';
    }
}

module.exports = checkArray;
