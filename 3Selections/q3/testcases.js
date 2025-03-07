module.exports = {
    testcases: [
        {
            inputs: [
                ['aaab', 'aaac', 'aaad', 'aaae'],
                ['abc', 'abcd', 'abcde', 'abcdef'],
                ['abc', 'aef', 'acd', 'bdf'],
                ['abc', 'bdf', 'aef', 'acd'],
                ['a', 'ab', 'abc', 'abcd'],
                ['programming', 'programmes', 'programmers', 'progamer'],
            ],
            expected: [3, 3, 0, 0, 1, 4],
        },
    ],
};
