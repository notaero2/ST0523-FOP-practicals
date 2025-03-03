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
    let longest = 0;
    let current = 0;
    let seen = ''; // rewrite such that seen is a string as students have not learned abotu sets
    for (let i = 0; i < string.length; i++) {
        const char = string[i];
        const index = seen.indexOf(char);
        if (index === -1) {
            seen += char;
            current++;
        } else {
            seen = seen.slice(index + 1) + char;
            current = seen.length;
        }
        longest = Math.max(longest, current);
    }
    return longest;
}

module.exports = longestSubstringWithoutRepeats;
