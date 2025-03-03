/**
 * You are given a list of answers to a MCQ test in an Array.
 * Except, the answer was entered in the wrong order!
 * That is, the first question was missed out and hence each answer is actually entered for the next question.
 *      the answer to the 2nd question was written on the first element of the array
 *      the answer to the 3rd question was written on the second element of the array
 *      and so on...
 *      the answer to the last question was hence left blank.
 * If it was in the correct order, all the answers would be correct.
 * You are to calculate how many questions were answered correctly despite the error.
 *
 * @param {string[]} answers - An array of strings where each string is the answer to a question.
 * @returns {number} - The number of questions that were answered correctly.
 *
 * @example
 * mcqError(['A', 'A', 'A', 'A', ' ']); // 3
 * mcqError(['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E', ' ']); // 5
 * mcqError(['A', 'B', 'C', 'D', 'D', ' ']); // 1
 *
 * @explanation
 * For the first example:
 * - The correct order should be: [' ', 'A', 'A', 'A', 'A']
 * - If it's in the correct order, then Q2-Q5 would be correct.
 * - Comparing them side by side:
 *    - Correct order:  [' ', 'A', 'A', 'A', 'A']
 *    - Given order:    ['A', 'A', 'A', 'A', ' ']
 * - We see that 3 overlaps, hence 3 questions were answered correctly.
 * - We do not know the answer to the first question, hence it is not counted.
 *
 * For the second example:
 * - Correct order:     [' ', 'A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E']
 * - Given order:       ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E', ' ']
 * - We see that 5 overlaps (Q2, Q4, Q6, Q8, and Q10), hence 5 questions were answered correctly.
 *
 * For the third example:
 * - Correct order:     [' ', 'A', 'B', 'C', 'D', 'D']
 * - Given order:       ['A', 'B', 'C', 'D', 'D', ' ']
 * - We see that 1 overlap (Q4), hence 1 question was answered correctly.
 */
function mcqError(answers) {
    let correct = 0;
    for (let i = 0; i < answers.length - 1; i++) {
        if (answers[i] === answers[i + 1]) {
            correct++;
        }
    }
    return correct;
}

module.exports = mcqError;
