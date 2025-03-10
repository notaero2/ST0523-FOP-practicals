module.exports = {
    testcases: [
        {
            inputs: [
                ['John', '01/01/2000', 'Alice', 'Bob', 'Charlie'],
                ['Alice', '02/02/2001', 'Bob', 'Charlie', 'David'],
                ['Bob', '03/03/2002', 'Charlie', 'David', 'Eve'],
                ['Charlie', '04/04/2003', 'David', 'Eve', 'Frank'],
            ],
            expected: [
                { name: 'John', birthday: '01/01/2000', friends: ['Alice', 'Bob', 'Charlie'] },
                { name: 'Alice', birthday: '02/02/2001', friends: ['Bob', 'Charlie', 'David'] },
                { name: 'Bob', birthday: '03/03/2002', friends: ['Charlie', 'David', 'Eve'] },
                { name: 'Charlie', birthday: '04/04/2003', friends: ['David', 'Eve', 'Frank'] },
            ],
        },
    ],
    options: {
        type: 'JSON',
    },
};
