module.exports = {
    testcases: [
        {
            inputs: [
                [
                    [1, 3, 5],
                    [2, 4, 6],
                ],
                [
                    [1, 11, 27, 39],
                    [9, 10, 15, 17],
                ],
            ],
            expected: [
                [1, 2, 3, 4, 5, 6],
                [1, 9, 10, 11, 15, 17, 27, 39],
            ],
        },
    ],
    options: {
        type: 'JSON',
        monkeyPatch: () => {
            Array.prototype.sort = function () {
                throw new Error('Array.sort() is disabled!');
            };
            Array.prototype.toSorted = function () {
                throw new Error('Array.sort() is disabled!');
            };
        },
    },
};
