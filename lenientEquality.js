var a = {};
var b = {};

// Same type so strict equality performed, different objects, result false.
console.log(a == b); // false

a.valueOf = function () {
  return 'monkeys';
};

b.valueOf = function () {
  return 'monkeys';
};

// Same type so strict equality performed, different objects, result false.
console.log(a == b); // false
// Different types, objects toPrimitive(), valueOf() used, strict equality
//  performed on identical strings, result true.
console.log(a == 'monkeys'); // true
console.log(b == 'monkeys'); // true

var c = {};
console.log(c.toString());

// c's valueOf() returns an object, so toPrimitive falls-back to toString().
//  a strict comparison is made, result true.
console.log(c == '[object Object]');
