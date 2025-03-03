const inputs = [];
const expected = [];
for (let i = 1; i <= 50; i++) {
    inputs.push([i]);
    expected.push((i % 15 === 0 && 'foobar') || (i % 3 === 0 && 'foo') || (i % 5 === 0 && 'bar') || i);
}
console.log(inputs, expected);
