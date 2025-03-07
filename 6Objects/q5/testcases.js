module.exports = {
    testcases: [
        {
            inputs: [
                [['def a 1', 'def b 2', 'def c 3', 'calc a + b']],
                [
                    [
                        'def foo 3',
                        'calc foo + bar',
                        'def bar 7',
                        'def programming 10',
                        'calc foo + bar',
                        'def is 4',
                        'def fun 8',
                        'calc programming - is + fun',
                        'def fun 1',
                        'calc programming - is + fun',
                    ],
                ],
                [
                    [
                        'def foo 1',
                        'def foo 2',
                        'def foo 3',
                        'calc foo + foo',
                        'calc foo + bar',
                        'def bar 6',
                        'def foobar 9',
                        'calc foo + bar',
                        'def programming 10',
                        'def four 4',
                        'calc foo + foo + four',
                        'def foo 7',
                        'calc foo - bar + foobar',
                        'calc programming + foo - bar - programming + bar',
                    ],
                ],
            ],
            expected: [
                ['c'],
                ['invalid', 'programming', 'unknown', 'bar'],
                ['unknown', 'invalid', 'foobar', 'programming', 'programming', 'foo'],
            ],
        },
    ],
    options: {
        type: 'JSON',
    },
};
