// Unlike other objects, the Math object has no constructor.
// The Math object is static.
// All methods and properties can be used without creating a Math object first.





// JavaScript Math Constants===========================================================>
// Math.E: 2.718281828459045 // returns Euler's number

// Math.PI: 3.141592653589793// returns PI

// Math.SQRT2: 1.4142135623730951 // returns the square root of 2

// Math.SQRT1_2: 0.7071067811865476// returns the square root of 1/2

// Math.LN2: 0.6931471805599453// returns the natural logarithm of 2

// Math.LN10: 2.302585092994046// returns the natural logarithm of 10

// Math.LOG2E: 1.4426950408889634// returns base 2 logarithm of E

// Math.Log10E: 0.4342944819032518 // returns base 10 logarithm of E

// =======================================================================================>
// JavaScript Math methods
let x=5.7;
Math.round(x)	//Returns x rounded to its nearest integer =>6
Math.ceil(x)	//Returns x rounded up to its nearest integer=>6
Math.floor(x)	//Returns x rounded down to its nearest integer=>5
Math.trunc(x)	//Returns the integer part of x (new in ES6)=>like floor value
Math.sign(x)    //returns if x is negative, null or positive:
Math.random(); //return 0 to less than 1 fractional value
Math.random()*10; //return 0 to less than 10 fractional value
