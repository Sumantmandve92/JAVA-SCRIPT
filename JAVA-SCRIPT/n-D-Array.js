// =>Nest one Array within Another Array
// You can also nest arrays within other arrays, like below:

const teams = [["Bulls", 23], ["White Sox", 45]];
//This is also called a multi-dimensional array.

// ============================================================================
//=> Access Array Data with Indexes
// We can access the data inside arrays using indexes.

// Array indexes are written in the same bracket notation that strings use, 
// except that instead of specifying a character, they are specifying an entry in the array. 
// Like strings, arrays use zero-based indexing, 
// so the first element in an array has an index of 0.


// =>Example

const array = [50, 60, 70];
console.log(array[0]);
const data = array[1];
// The console.log(array[0]) prints 50, and data has the value 60.
// 


// ====================================================================================
//=>Modify Array Data With Indexes
// Unlike strings, the entries of arrays are mutable and can be changed freely, 
// even if the array was declared with const.

Example

const ourArray = [50, 40, 30];
ourArray[0] = 15;
// ourArray now has the value [15, 40, 30].

// =>Note: There shouldn't be any spaces between the array name and the square brackets, 
// like array [0]. Although JavaScript is able to process this correctly, 
// this may confuse other programmers reading your code.




// =====================================================================================
//=>Access Multi-Dimensional Arrays With Indexes
// One way to think of a multi-dimensional array, is as an array of arrays. 
// When you use brackets to access your array, 
// the first set of brackets refers to the entries in the outermost (the first level) array, 
// and each additional pair of brackets refers to the next level of entries inside.

Example

const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14]
];

const subarray = arr[3];
const nestedSubarray = arr[3][0];
const element = arr[3][0][1];
// In this example, subarray has the value [[10, 11, 12], 13, 14], nestedSubarray has the value [10, 11, 12], 
// and element has the value 11 .

// Note: There shouldn't be any spaces between the array name and the square brackets, 
// like array [0][0] and even this array [0] [0] is not allowed. 
// Although JavaScript is able to process this correctly, 
// this may confuse other programmers reading your code.



// ================================================================
// in js array size is dynamic in nature 
// =>Manipulate Arrays With push Method
 push() //method--------------------------------------------------------->
// An easy way to append data to the end of an array is via the push() function.

// .push() takes one or more parameters and "pushes" them onto the end of the array.

Examples:

const arr1 = [1, 2, 3];
arr1.push(4);

const arr2 = ["Stimpson", "J", "cat"];
arr2.push(["happy", "joy"]);
// arr1 now has the value [1, 2, 3, 4] and arr2 has the value ["Stimpson", "J", "cat", ["happy", "joy"]].

pop()//method------------------------------------------------------------------>
//  .pop() removes the last element from an array and returns that element.

// Any type of entry can be popped off of an array - numbers, strings, even nested arrays.

const threeArr = [1, 4, 6];
const oneDown = threeArr.pop();
console.log(oneDown);
console.log(threeArr);
// The first console.log will display the value 6, and the second will display the value [1, 4].


shift()//method------------------------------------------------------------------>

// pop() method always removes the last element of an array. What if you want to remove the first?

//That's where .shift() comes in. It works just like .pop(), except it removes the first element instead of the last.

Example:

const ourArray = ["Stimpson", "J", ["cat"]];
const removedFromOurArray = ourArray.shift();
// removedFromOurArray would have a value of the string Stimpson, and ourArray would have ["J", ["cat"]].


unshift() //method ------------------------------------------------------------------>

// Not only can you shift elements off of the beginning of an array, 
// you can also unshift elements to the beginning of an array 
// i.e. add elements in front of the array.

// .unshift() works exactly like .push(), return length of updated array
// but instead of adding the element at the end of the array, 
// unshift() adds the element at the beginning of the array.