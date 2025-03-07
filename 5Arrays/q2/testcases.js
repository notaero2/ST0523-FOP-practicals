module.exports = {
    testcases: [
        {
            inputs: [
                [['A', 'A', 'A', 'A', ' ']],
                [['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E', ' ']],
                [['A', 'B', 'C', 'D', 'D', ' ']],
                [['A', 'D', 'B', 'B', 'C', 'A', ' ']],
                [['A', 'D', 'C', 'B', 'C', 'C', 'A', 'C', 'D', 'D', 'A', 'B', 'A', 'A', ' ']],
            ],
            expected: [3, 5, 1, 1, 3],
        },
    ],
    options: {
        type: 'floating point',
        precision: 6,
    },
};
