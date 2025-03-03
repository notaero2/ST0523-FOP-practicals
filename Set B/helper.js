const alphabet = 'abcdefghijklmnopqrstuvwxyz';

const inputs = [];

for (let i = 0; i < 10; i++) {
    const length = Math.floor(Math.random() * 20) + 1;
    const string1 = Array.from({ length }, () => alphabet[Math.floor(Math.random() * alphabet.length)]).join('');
    const string2 = Array.from({ length }, () => alphabet[Math.floor(Math.random() * alphabet.length)]).join('');
    inputs.push([string1, string2]);
}

console.log(inputs);
