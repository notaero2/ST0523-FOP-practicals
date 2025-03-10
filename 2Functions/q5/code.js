/**
 * @param {number} number - The number
 * @returns {string | number} - "foo" if number is divisible by 3, "bar" if number is divisible by 5, "foobar" if number is divisible by both 3 and 5, otherwise return the number.
 *
 * Hint: Use && and || short circuiting
 * @example
 * A && B - If A is true, return B, otherwise return A
 * A || B - If A is true, return A, otherwise return B
 *
 * | A | B | A && B |
 * ------------------
 * | T | T |   T    |
 * | T | F |   F    | - When A is True, it depends on whatever B is
 * | F | T |   F    |
 * | F | F |   F    | - When A is False, it doesn't matter what B is
 *
 * | A | B | A || B |
 * ------------------
 * | T | T |   T    |
 * | T | F |   T    | - When A is True, it doesn't matter what B is
 * | F | T |   T    |
 * | F | F |   F    | - When A is False, it depends on whatever B is
 *
 */
function foobar(number) {}

module.exports = foobar;

// Your own test cases
// e.g.;

// console.log(foobar(3));
