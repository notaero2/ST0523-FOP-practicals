module.exports = {
    testcases: [
        {
            inputs: [
                [160, 17, false, false],
                [160, 17, true, false],
                [160, 17, false, true],
                [160, 17, true, true],
                [100, 17, false, false],
                [160, 12, false, false],
                [160, 12, true, false],
                [160, 12, false, true],
                [160, 12, true, true],
            ],
            expected: [true, true, false, false, false, false, true, false, false],
        },
    ],
};
