module.exports = {
    testcases: [
        {
            inputs: [
                [2.5, 3, 4],
                [5, 3, 4],
                [2, 3, 4],
                [6.5, 5, 12],
                [12.5, 7, 24],
                [12.5, 7, 25],
                [4, 1, 30],
            ],
            expected: [true, true, false, true, true, false, false],
        },
    ],
};
