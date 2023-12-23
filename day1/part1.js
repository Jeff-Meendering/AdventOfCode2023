import fs from 'fs';

const lines = fs.readFileSync('./input.txt', 'utf-8').trim().split('\n');
const values = lines
    .map((line) => {
        let first = line.split('').find((v) => /^\d$/.test(v));
        let last = line.split('').reverse().find((v) => /^\d$/.test(v));
        return Number(first + last);
    });

let sum = values.reduce((s, v) => s + v);

console.log(sum);
