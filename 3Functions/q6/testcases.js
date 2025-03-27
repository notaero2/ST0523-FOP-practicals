module.exports = {
    testcases: [
        {
            inputs: [
                [1, 52],
                [10, 8],
                [42, 19],
                [50, 12],
                [50, 24],
                [13, 13],
            ],
            expected: [true, false, false, true, true, false],
        },
    ],
    options: {
        monkeyPatch: function (fn) {
            let called = 0;
            const originalRandom = Math.random;
            return (a, b) => {
                const newA = (a - 1) / 52;
                const newB = (b - 1) / 52;
                Math.random = () => (called++ ? (called > 2 ? 0 : newA) : newB);
                const result = fn();
                called = 0;
                return result;
            };
        },
    },
};
