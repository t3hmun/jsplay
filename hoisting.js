/*

Javascript is not interpreted naively line by line.
In Javascript we can say:
 * A var is declared in a scope `var x;` or `function ... (...){...}`
 * A var is defined with a value `x = 5;` or `x = function(...){...}`
The declaring and defining are 2 separate things.
This means `var x = 5;` is really 2 lines of code.

In each scope, the declarations are pushed to the top.
This is hoisting.

*/

// The following 5 statements will work in any order.
decfirst(true);
decsecond(true);
decthird(decfourth);
decfourth(decthird);
decthird(decthird);

function decfirst(docall) {
  console.log('first');
  if (docall) decsecond();
}

function decsecond(docall) {
  console.log('second');
  if (docall) decfirst();
}

function decthird(callme) {
  console.log('third');
  if (callme) callme();
}

function decfourth(callme) {
  console.log('fourth');
  if (callme) callme();
}

// Cant do the next line, it would have a Reference Error. Implicit globals are not hoisted.
//console.log('implicit: ' + implicitGlobalVar);

// Next line Prints undefined, the var declaration was hoisted.
console.log('good: ' + goodGlobalVar);
// This next line the var declaration is hoisted, but not the assignment.
console.log('confusing:' + confusingGlobalVar);
// The naughty function is hoisted so we can use it.
naughty();
// All these vars are assigned in naughty so they print as assigned.
console.log('implicit: ' + implicitGlobalVar);
console.log('good: ' + goodGlobalVar);
console.log('confusing:' + confusingGlobalVar);

function naughty() {
  console.log('naughty');
  implicitGlobalVar = 'implicit (naughty)';
  goodGlobalVar = 'good (naughty)';
  confusingGlobalVar = 'confusing (naughty)';
}

var goodGlobalVar;
var confusingGlobalVar = 'confusing (decalration)';

// The assignment of this var was not hoisted so it happens where you see it.
// Only the declaration bit was hoisted.
console.log('confusing:' + confusingGlobalVar);
