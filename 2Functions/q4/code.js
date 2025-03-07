/**
 * @param {number} height - The height of the person in cm
 * @param {number} age - The age of the person in years
 * @param {boolean} withParent - Whether the person is with a parent or guardian
 * @param {boolean} hasHeartCondition - Whether the person has a heart condition
 * @returns {boolean} - Whether the person can sit on the rollercoaster
 *
 * The requirements are:
 * - The person must be at least 120cm tall AND
 * - The person must be at least 16 years old, or be with a parent or guardian AND
 * - The person must not have a heart condition AND
 *
 * @example
 * canSitRollercoaster(130, 15, true, false); // false
 * canSitRollercoaster(130, 15, false, false); // true
 * canSitRollercoaster(130, 15, true, true); // false
 * canSitRollercoaster(100, 16, false, false); // false
 *
 * @explaination
 * The person is not allowed to sit on the rollercoaster as the age is less than 16.
 * The person is allowed to sit on the rollercoaster even though the age is less than 16 as they are with their parent.
 * The person is not allowed to sit on the rollercoaster as the person has a heart condition.
 * The person is not allowed to sit on the rollercoaster as the person is not tall enough.
 *
 *
 */
function canSitRollercoaster(height, age, withParent, hasHeartCondition) {}

module.exports = canSitRollercoaster;

// Your own test cases
// e.g.;

// console.log(canSitRollercoaster(130, 15, true, false)); // false
