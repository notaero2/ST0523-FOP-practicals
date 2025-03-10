module.exports = {
    testcases: [
        {
            inputs: [['C'], ['G'], ['D'], ['A'], ['E']],
            expected: [
                ['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C'],
                ['G', 'A', 'B', 'C', 'D', 'E', 'F#', 'G'],
                ['D', 'E', 'F#', 'G', 'A', 'B', 'C#', 'D'],
                ['A', 'B', 'C#', 'D', 'E', 'F#', 'G#', 'A'],
                ['E', 'F#', 'G#', 'A', 'B', 'C#', 'D#', 'E'],
            ],
        },
    ],
    options: {
        type: 'JSON',
    },
};
