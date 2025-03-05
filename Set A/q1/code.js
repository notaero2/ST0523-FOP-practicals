/**
 * @param {number | string} a - The first value
 * @param {number | string} b - The second value
 * @returns {number} - The sum of the two values
 *
 * @example
 * sumTwoValue(1, 2); // 3
 * sumTwoValue('1', '2'); // 3
 * sumTwoValue('1', 2); // 3
 * sumTwoValue(1, '2'); // 3
 *
 * @explanation
 * In the first example, 1 + 2 = 3
 * In the second example, '1' + '2' = 3, the values are converted to numbers before adding
 * In the third example, '1' + 2 = 3, the values are converted to numbers before adding
 * In the fourth example, 1 + '2' = 3, the values are converted to numbers before adding
 */
function sumTwoValue(a, b) {}

module.exports = sumTwoValue;
