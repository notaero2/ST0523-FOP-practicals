/**
 * Find the longest common prefix of four strings.
 *
 * @param {string} string1 - The first string.
 * @param {string} string2 - The second string.
 * @param {string} string3 - The third string.
 * @param {string} string4 - The fourth string.
 *
 * @returns {number} - The length of the longest common prefix of the four strings.
 *
 * @example
 * longestCommonPrefix('hello', 'hello', 'hello', 'hello'); // 5
 * longestCommonPrefix('hello', 'world', 'hello', 'world'); // 0
 * longestCommonPrefix('abcde', 'abcef', 'abefg', 'abcge'); // 2
 *
 * @explaination
 * For the first example, the longest common prefix is 'hello', which has a length of 5.
 * For the second example, there are no common prefix, so the length is 0.
 * For the third example, the longest common prefix is 'ab', which has a length of 2.
 */
function longestCommonPrefix(string1, string2, string3, string4) {
    let shortest = string1
    if (string2.length < shortest.length) {
        shortest = string2
    }
    if (string3.length < shortest.length) {
        shortest = string3
    }
    if (string4.length < shortest.length) {
        shortest = string4
    }
    let prefixLength = 0
    let different = false
    for (let k = 0; k < shortest.length; k++) {
        if (!different) {
            if (string1[prefixLength] == string2[prefixLength] && string1[prefixLength] == string3[prefixLength] && string1[prefixLength] == string4[prefixLength]) {
                prefixLength += 1
            } else {
                different = true
            }
        }
    }
    return prefixLength
}

// Your own test cases
// e.g.;

console.log(longestCommonPrefix('hello', 'world', 'hello', 'world'));

// To test your code against the test cases: node run.js q4
// To test your code against custom input: node ./q4/code.js

module.exports = longestCommonPrefix;
