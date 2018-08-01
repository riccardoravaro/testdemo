
Here is a list of current possibilities:

1. (ES6) includes—go to answer

var string = "foo",
    substring = "oo";
string.includes(substring);
2. ES5 and older indexOf

var string = "foo",
    substring = "oo";
string.indexOf(substring) !== -1;
String.prototype.indexOf returns the position of the string in the other string. If not found, it will return -1.

3. search—go to answer

var string = "foo",
    expr = /oo/;
string.search(expr);
4. lodash includes—go to answer

var string = "foo",
    substring = "oo";
_.includes(string, substring);
5. RegExp—go to answer

var string = "foo",
    expr = /oo/;  // no quotes here
expr.test(string);
6. Match—go to answer

var string = "foo",
    expr = /oo/;
string.match(expr);





lodash

var users = [
  { 'user': 'barney', 'age': 36, 'active': true },
  { 'user': 'fred',   'age': 40, 'active': false }
];

_.filter(users, function(o) { return !o.active; });
// => objects for ['fred']

// The `_.matches` iteratee shorthand.
_.filter(users, { 'age': 36, 'active': true });
// => objects for ['barney']

// The `_.matchesProperty` iteratee shorthand.
_.filter(users, ['active', false]);
// => objects for ['fred']

// The `_.property` iteratee shorthand.
_.filter(users, 'active');
// => objects for ['barney']
So the solution for the original question would be just one liner:

var result = _.filter(data, ['website', 'yahoo']);
