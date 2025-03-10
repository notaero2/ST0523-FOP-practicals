module.exports = {
    testcases: [
        {
            inputs: [
                [10, 10],
                [10, 5],
                [10, 9],
                [10, 15],
                [10, 11],
            ],
            expected: [
                'Enough',
                'You lack 5 chickens',
                'You lack 1 chicken',
                'You have a surplus of 5 chickens',
                'You have a surplus of 1 chicken',
            ],
        },
    ],
};
