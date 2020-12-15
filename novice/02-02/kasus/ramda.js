// map
const {
    identity
} = R

console.log(R.map(identity, [1, 2, 3]));
// filter
const isEven = n => n % 2 === 0;

R.filter(isEven, [1, 2, 3, 4]);
console.log(R.filter(isEven, [1, 2, 3, 4]));
// reduce
R.range(1, 5);
console.log(R.range(1, 5));