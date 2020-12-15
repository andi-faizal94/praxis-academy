// map
var users = [{
        'user': 'barney'
    },
    {
        'user': 'fred'
    }
];

// The `_.property` iteratee shorthand.
_.map(users, 'user');
// => ['barney', 'fred']
console.log(_.map(users, 'user'));

// filter
var users = [{
        'user': 'barney',
        'age': 36,
        'active': true
    },
    {
        'user': 'fred',
        'age': 40,
        'active': false
    }
];

_.filter(users, function(o) {
    return !o.active;
});
// => objects for ['fred']

// The `_.matches` iteratee shorthand.
_.filter(users, {
    'age': 36,
    'active': true
});
// => objects for ['barney']

// The `_.matchesProperty` iteratee shorthand.
_.filter(users, ['active', false]);
// => objects for ['fred']

// The `_.property` iteratee shorthand.
var a = _.filter(users, 'active');
// => objects for ['barney']
console.log(a);

// reduce
_.reduce([1, 2], function(sum, n) {
    return sum + n;
}, 0);
// => 3

_.reduce({
    'a': 1,
    'b': 2,
    'c': 1
}, function(result, value, key) {
    (result[value] || (result[value] = [])).push(key);
    return result;
}, {});