// This only applies to Node.Js

'use strict';

console.log(this === exports);

var ob = { obthis : this };

console.log(ob.obthis === exports);

function fun() {
  return this;
}

console.log(typeof fun() === 'undefined');

ob.fun = fun;

console.log(ob.fun() === ob);
