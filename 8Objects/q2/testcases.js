module.exports = {
    testcases: [
        {
            inputs: [
                [{ type: 'circle', radius: 5 }],
                [{ type: 'rectangle', width: 5, length: 10 }],
                [{ type: 'triangle', base: 5, height: 10 }],
                [{ type: 'square', side: 5 }],
                [{ type: 'circle', radius: 7 }],
                [{ type: 'rectangle', width: 9, length: 12 }],
                [{ type: 'triangle', base: 35, height: 22 }],
                [{ type: 'square', side: 77 }],
            ],
            expected: [Math.PI * 5 * 5, 50, 25, 25, Math.PI * 7 * 7, 108, 385, 5929],
        },
    ],
};
