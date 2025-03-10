module.exports = {
    testcases: [
        {
            inputs: [
                ['hello', 'world'],
                ['abbbbba', 'bbba'],
                ['abc', 'def'],
                ['xyza', 'uvwa'],
                ['abcdefghijklmnopqrstuvwxyz', 'zyxwvutsrqponmlkjihgfedcba'],
                ['og', 'rk'],
                ['hsy', 'qaw'],
                ['fiojujzwpghaszd', 'tdpwpthqrimfryr'],
                ['nfeqwra', 'kdexyik'],
                ['mfzsvghjhnfhrmrua', 'pvgjejqxfafrouvde'],
                ['vhdmiru', 'qmwvjyk'],
                ['yrqmvtxtu', 'hxgldckps'],
                ['gaefmv', 'aosrsh'],
                ['eyancgwk', 'smlsnxdf'],
                ['zgd', 'fwg'],
            ],
            expected: [5, 5, -1, 6, 25, -1, -1, 10, 4, 5, 3, 7, 1, 7, 3],
        },
    ],
};
