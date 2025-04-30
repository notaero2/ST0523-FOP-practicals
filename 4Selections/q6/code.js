/**
 * You are given a function that supposedly takes in 2 integer and decide if the first number is bigger than the second.
 * If the first number is bigger, it will return a positive number
 * If the second number is bigger, it will return a negative number
 * Otherwise, it will return a zero.
 *
 * You are to test whether the function is working correctly.
 *
 * @param {(int, int) => int} fn - The function to be tested
 * @returns {boolean} - True if the function is working as intended, false otherwise.
 *
 * @example
 * isCorrect(function(a, b) { return a - b; }) // true
 * isCorrect(function(a, b) { return b - a; }) // false
 * isCorrect(function(a, b) { return a > b; }) // false
 *
 * @explanation
 * In the first function, if a is greater than b, it will return a positive number, if b is greater, it will return a negative number, if equal, it'll return 0.
 * In the second function, if a is greater than b, it will return a negative number where it should've returned a positive number.
 * In the third function, if b is greater than a, it will return false instead of a negative number.
 *
 * @note
 * This question focuses on calling functions and checking their returned value.
 * There is no obscure hidden edge cases.
 */
function isCorrect(fn) {
    let check = 1
    let reset = -999999999999999
    let nos = [reset, reset]
    let val = 1

    //generating many testcases and comparing them
    while (nos[1] <= -reset) {
        nos[0] = reset
        while (nos[0] <= -reset) {
            val = fn(nos[0], nos[1])

            if (nos[0] > nos[1]) {
                check = 1
            } else if (nos[1] > nos[0]) {
                check = -1
            } else {
                check = 0
            }
            if ((check === 0 || val === 0) && check !== val) {
                return false
            } else {
                check = Math.abs(Number(val)) * check
                if (!(check === val)) {
                    return false
                }
            }

            nos[0] += 1
        }
        nos[1] += 1
    }

    return true
}

// Your own test cases
// e.g.;

function sampleIsBigger(a, b) {
    return a - b;
}

console.log(isCorrect(sampleIsBigger)); // 'Stop'

// To test your code against the test cases: node run.js q5
// To test your code against custom input: node ./q5/code.js

module.exports = isCorrect;
