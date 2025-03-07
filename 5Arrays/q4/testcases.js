module.exports = {
    testcases: [
        {
            inputs: [[[1, 2, 0]], [[1, 2, 1]], [[2, 1, 4, 1, 9]], [[2, 4, 1, 6, 3, 9, 5]], [[2, 4, 1, 6, 3, 0, 5]]],
            expected: [true, true, false, false, true],
        },
    ],
};
