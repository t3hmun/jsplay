// This file demonstrats that outside of functions `this` is `exports`,
//  inside functions

// ESLint is used to detect erroneous and naugthy code.
// Lines demonstrating implicit globals have their ESLint disable comments.

console.log('top `this` (exports):');
console.log(this);

this.isTopThisWhichIsExports = true;
console.log('\ntop `this` with a property added:');
console.log(this);

// `this` does not change if obA is decalared without `var` (try it).
var obA = {
  a: 'string in obA',
  // `this` is exports, not `obA`.
  athis: this,

  funTimes: function () {
    console.log('\nThis in obA method body:');
    // `this` is now obA.
    console.log(this);

    var obB = {
      b: 'object b in function in object a',
      bthis: this,
      bthisFunc: function () {
        return this;
      },
      athisFrombFunc: function () {
        return obA.athis;
      }
    };

    console.log('\nobB is an object in a function in object obA.');
    console.log('`this` from obB property (`bthis: this `):');
    console.log(obB.bthis);

    console.log('\n`this` returned from obB method:');
    console.log(obB.bthisFunc());

    console.log('\nobA.athis (`athis: this`) returned from obB method:');
    console.log(obB.athisFrombFunc());
  }
};

console.log('\nobA: ');
console.log(obA);

console.log('\nobA.a: ');
console.log(obA.a);

console.log('\noba.athis: ');
console.log(obA.athis);

obA.funTimes();
console.log();

function retThisFunc() {
  return this;
}
// Implicitly assign as property of the `global` object.
isGlobalObject = true; //eslint-disable-line no-undef
// Assign to `module.exports`.
this.isExportsObject = true;

// Decalre as a method of `this`, which is `exports`.
this.thisRtFunc = retThisFunc;
// Declare as a top level function.
var varRtFunc = retThisFunc;

var something = {
  thisIsExportsObject: this.isExportsObject,
  thisProperty: this,
  funcWithImplicitGlobal: function () {
    implicitGlobalVar = true; //eslint-disable-line no-undef
  }
};

// Must call function otherwise the implicit global will not be defined.
something.funcWithImplicitGlobal(); //eslint-disable-line no-undef

// In browsers global === Window
// The this that ` === exports ` in node `=== global` in browsers.

var trueForNodeJs = [

  '#global',
  isGlobalObject, //eslint-disable-line no-undef
  global.isGlobalObject, // it is true, not undefined
  global === retThisFunc(),
  global === varRtFunc(),
  global.implicitGlobalVar,

  // It is as if the top level is a function that is bound to `module.exports`.
  '#exports',
  this.isExportsObject,
  this === exports, // `exports` is a pre-defined `var exports = module.exports`
  this === module.exports,
  something.thisIsExportsObject,
  this === something.thisProperty,
  this === this.thisRtFunc(),
  this !== global,
  this !== module
];

for (var i = 0; i < trueForNodeJs.length; i++) {
  console.log(trueForNodeJs[i]);
}
