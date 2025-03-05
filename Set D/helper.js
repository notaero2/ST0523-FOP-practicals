const places = ['Malaysia', 'New Zealand', 'China', 'America', 'South Africa'];
const visits = {};
const inputs = [];

for (let i = 0; i < 25; i++) {
    const place = places[Math.floor(Math.random() * places.length)];
    const year = Math.floor(Math.random() * 30) + 1994;
    if (!visits[place]) {
        visits[place] = [];
    }
    visits[place].push(year);
    inputs.push(`${place} ${year}`);
}

const queries = [];
for (let i = 0; i < 10; i++) {
    const place = places[Math.floor(Math.random() * places.length)];
    const nth = Math.floor(Math.random() * visits[place].length) + 1;
    queries.push(`${place} ${nth}`);
}

console.log(inputs);
console.log(queries);
