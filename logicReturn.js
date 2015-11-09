// This shows: 
// * Values that evaluate as false in boolean situations 
// * Lazy logic operators returns last evaluated operand

var truething = 'salutations'
// All of the falsething options evaluate as false. 
//var falsething; //undefined
var falsething = 0;
//var falsething = "";
//var falsething = false;
//var falsething = NaN;
//var falsething = null;
console.log(truething && falsething); //== falsething
console.log(truething || falsething); //== truething
console.log(falsething && truething); //== falsething
console.log(falsething || truething); //== truething