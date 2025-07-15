/**
 * Given a string, find the length of the longest substring without repeating characters.
 *
 * @param {string} string - The input string.
 * @returns {number} - The length of the longest substring without repeating characters.
 *
 * @example
 * longestSubstringWithoutRepeats('abcabcbb'); // 3
 * longestSubstringWithoutRepeats('bbbbb'); // 1
 * longestSubstringWithoutRepeats('pwwkew'); // 3
 *
 * @explanation
 * For the first example, the longest substring without repeating characters is 'abc', which has a length of 3.
 * For the second example, the longest substring without repeating characters is 'b', which has a length of 1.
 * For the third example, the longest substring without repeating characters is 'wke or 'kew', both which has a length of 3.
 */
function longestSubstringWithoutRepeats(string) {
    let subLen = 0
    let max = 0
    let subStr = ''
    let nextChar = '?'
    let repeat = false
    
    if (string.length == 0) {
        return 0
    }

    for (let start = 0; start < string.length; start++) {
        subLen = 1
        repeat = false
        while (start + subLen <= string.length && !repeat) {
            subStr = string.slice(start, start+subLen-1);
            nextChar = string[start+subLen-1]
            for (let i = 0; i < subStr.length; i++) {
                if (nextChar == subStr[i]) {
                    repeat = true
                }
            }
            if (!repeat) {
                if (max < subLen) {
                    max = subLen
                }
                subLen++
            }
        }
    }
    return max
}

// Your own test cases
// e.g.;

console.log(longestSubstringWithoutRepeats('abcabcbb'));

// To test your code against the test cases: node run.js q4
// To test your code against custom input: node ./q4/code.js

module.exports = longestSubstringWithoutRepeats;
