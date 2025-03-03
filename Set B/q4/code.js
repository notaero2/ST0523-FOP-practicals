/**
 * Given 2 string, string1 and string2, find the smallest sum of 0 based index of the common characters in both strings.
 * If there are no common characters, return -1.
 *
 * @param {string} string1
 * @param {string} string2
 *
 * @returns {number} - The smallest sum of index of the common characters in both strings.
 *
 * @example
 * earliestCommonCharacter('hello', 'world'); // o --> 4 + 1 = 5
 * earliestCommonCharacter('abbbbba', 'bbba'); // b --> 1 + 0 = 1
 * earliestCommonCharacter('abc', 'def'); // -1
 */
function earliestCommonCharacter(string1, string2) {
    // use 2 for-loop instead
    let result = string1.length + string2.length;
    for (let i = 0; i < string1.length; i++) {
        for (let j = 0; j < string2.length; j++) {
            if (string1[i] === string2[j]) {
                result = Math.min(i + j, result);
            }
        }
    }
    if (result === string1.length + string2.length) {
        return -1;
    }
    return result;
}

module.exports = earliestCommonCharacter;
