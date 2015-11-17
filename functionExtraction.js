// Function extraction.
// What happens when you move functions with `this.`.

var objA = {
  val: 'a',
  valFun: function () {
    console.log(this.val);
  }
};

var objB = {
  val: 'b'
};

objA.valFun();

console.log('Object B:');

console.log('Simple assign'); // Respects context.
objB.valFun = objA.valFun;
objB.valFun();

console.log('Bind B'); // Respects Bind
objB.valFun = objA.valFun.bind(objB);
objB.valFun();

console.log('Bind A'); // Respects Bind
objB.valFun = objA.valFun.bind(objA);
objB.valFun();

console.log('Orphan:');

console.log('Simple assign'); // Context with no `this` so unassigned.
var x = objA.valFun;
x();

console.log('Bind B'); // Respects Bind
x = objA.valFun.bind(objB);
x();

console.log('Bind A'); // Respects Bind
x = objA.valFun.bind(objA);
x();

console.log('Move a bound function:'); // Respects Bind
objB.valFun = objA.valFun.bind(objB);
objA.valFun = objB.valFun;
objA.valFun();
