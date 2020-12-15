// persamaan dari ramda js ,underscore.js dan lodash

// map
const arry = [1, 2, 3, 4, 5];
const arry2 = _.map(arry, (a) => a + 1);
console.log(arry2);

// find
var even = _.find([1, 2, 3, 4, 5, 6], function(num) {
    return num % 2 == 0;
});
console.log(even)
    // filter
var evens = _.filter([1, 2, 3, 4, 5, 6], function(num) {
    return num % 2 == 0;
});
console.log(evens);
// reduce
var sum = _.reduce([1, 2, 3], function(memo, num) {
    return memo + num;
}, 0);
console.log(sum);