/**
 * Find the first n numbers whose digits sum to the target k.
 *
 * @param {number} n - The number of elements to find.
 * @param {number} k - The target sum of the digits.
 *
 * @returns {number[]} - An array of the first n numbers whose digits sum to the target k.
 *
 * @example
 * digitsSumToTarget(5, 5); // [5, 14, 23, 32, 41]
 * digitsSumToTarget(3, 10); // [19, 28, 37]
 *
 * @explanation
 * In the first example, the first 5 numbers whose digits sum to 5 are 5, 14, 23, 32, and 41.
 *  5 = 5
 *  14 = 1 + 4 = 5
 *  23 = 2 + 3 = 5
 *  32 = 3 + 2 = 5
 *  41 = 4 + 1 = 5
 * 
 * In the second example, the first 3 numbers whose digits sum to 10 are 19, 28, and 37.
 *  19 = 1 + 9 = 10
 *  28 = 2 + 8 = 10
 *  37 = 3 + 7 = 10
 * 
 * Hint: Refer to the digitSum function in ../4Loops/q6/code.js
 */
function digitsSumToTarget(n, k) {
    //variables from loops q5
    let digitSum = 0
    let digit = 0
    let digitNo = 1
    let intDivide = 1

    let found = []
    let num = 0
    if (k == 0) {
        return undefined
    }
    while (found.length < n) {
        num++

        //taken from loops q5
        digitSum = 0
        digit = 0
        digitNo = 1
        intDivide = num / 10**(digitNo-1)
        while (intDivide >= 1) {
            digit =  parseInt(intDivide) % 10
            digitSum += digit
            digitNo += 1
            intDivide = num / 10**(digitNo-1)
        }
        if (digitSum == k) {
            found.push(num)
        }
    }
    return found
}

// Your own test cases
// e.g.;

// console.log(digitsSumToTarget([5, 5])); // [5, 14, 23, 32, 41]

// To test your code against the test cases: node run.js q1
// To test your code against custom input: node ./q1/code.js

module.exports = digitsSumToTarget;
