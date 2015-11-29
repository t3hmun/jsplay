'use strict';

// This file shows that finally is always excuted ater the try and/or catch,
//  even when control is lost inside the catch.

function maythrow(willthrow) {
  console.log('start of maythrow');
  if (willthrow) {
    console.log('before throw');
    throw new Error('an error');
    // code here would be unreachable.
  } else {
    console.log('no throw');
  }
  console.log('end of maythrow');
}

function trycatchfinally(willthrow) {
  console.log('start of trycatchfinally');
  try {
    console.log('before maythrow call');
    maythrow(willthrow);
    console.log('after maythrow call');
  } catch (e) {
    console.log('caught error: ' + e);
  } finally {
    console.log('finally');
  }
  console.log('end of trycatchfinally');
}

function trycatchfinallyreturn(willthrow) {
  console.log('start of trycatchfinallyreturn');
  try {
    console.log('before maythrow call');
    maythrow(willthrow);
    console.log('after maythrow call');
  } catch (e) {
    console.log('caught error: ' + e);
    console.log('returning in catch');
    return;
  } finally {
    console.log('finally');
  }
  console.log('end of trycatchfinallyreturn');
}

function trycatchfinallythrow(willthrow) {
  console.log('start of trycatchfinallythrow');
  try {
    console.log('before maythrow call');
    maythrow(willthrow);
    console.log('after maythrow call');
  } catch (e) {
    console.log('caught error: ' + e);
    console.log('throwing new error in catch');
    throw new Error('error thrown from catch');
  } finally {
    console.log('finally');
  }
  console.log('end of trycatchfinallythrow');
}

function trycatchfinallyreturnintry() {
  console.log('start of trycatchfinallyreturnintry');
  try {
    console.log('returning in try');
    return;
  } catch (e) {
    // Nothing to catch in this example.
  } finally {
    console.log('finally');
  }
  console.log('end of trycatchfinallyreturnintry');
}

// Simple example with error thrown and caught.
console.log('\nwillthrow true\n');
trycatchfinally(true);

// Simple example with no error thrown.
console.log('\nwillthrow false\n');
trycatchfinally(false);

// The finally is executed as if it was after the return statement.
console.log('\ntrycatchfinallyreturn\n');
trycatchfinallyreturn(true);
console.log('after trycatchfinallyreturn');

// The finally is executed right after the second throw.
console.log('\ntrycatchfinallythrow\n');
console.log('before top try catch block');
try{
  console.log('before trycatchfinallythrow call');
  trycatchfinallythrow(true);
  console.log('after trycatchfinallythrow call');
} catch(e) {
  console.log('caught error: ' + e);
}
console.log('after top try catch block');

// There is no error, however attempting to return in the try still triggers
//  finally immediately afterwards.
console.log('\ntrycatchfinallyreturnintry\n');
trycatchfinallyreturnintry();
