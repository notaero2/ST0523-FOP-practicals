/**
 * Sum the digits of a number
 *
 * @param {number} n - The number to sum the digits of
 *
 * @returns {number} - The sum of the digits of the number
 *
 * @example
 * digitSum(12345); // 1 + 2 + 3 + 4 + 5 = 15
 * digitSum(0); // 0
 * digitSum(2025); // 2 + 0 + 2 + 5 = 9
 *
 * Hint: You can access the nth digit of a number by dividing it by 10**(n-1) and taking the remainder when divided by 10.
 */
function digitSum(n) {
    let total = 0
    let digit = 0
    let digitNo = 1
    let intDivide = n / 10**(digitNo-1)
    while (intDivide >= 1) {
        digit =  parseInt(intDivide) % 10
        total += digit

        digitNo += 1
        intDivide = n / 10**(digitNo-1)
    }
    return total
}

// Your own test cases
// e.g.;

console.log(digitSum(12345));

// To test your code against the test cases: node run.js q5
// To test your code against custom input: node ./q5/code.js

module.exports = digitSum;
