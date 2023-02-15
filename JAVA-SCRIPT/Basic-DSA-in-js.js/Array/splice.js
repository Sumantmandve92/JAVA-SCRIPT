/*so we've learned how to remove elements from the beginning and end of arrays using shift() and pop(), 
but what if we want to remove an element from somewhere in the middle? Or remove more than one element at once?
 Well, that's where splice() comes in.
  splice() allows us to do just that: remove any number of consecutive elements from anywhere in an array.

splice() can take up to 3 parameters, but for now, we'll focus on just the first 2. 
The first two parameters of splice() are integers 
which represent indexes, or positions, of items in the array that splice() is being called upon. 
And remember, arrays are zero-indexed, so to indicate the first element of an array, 
we would use 0. splice()'s first parameter represents the index on the array from which to begin removing elements, 
while the second parameter indicates the number of elements to delete. For example:*/


const arr = [2, 4, 5, 1, 7, 5, 2, 1];

arr.splice(1,4);

console.log(arr);//[2,5,2,1]

// splice() not only modifies the array it's being called on, 
// but it also returns a new array containing the value of the removed elements:
let array = ['I', 'am', 'feeling', 'really', 'happy'];

let newArray = array.splice(3, 2);
console.log(newArray);


// ========================================================================================>
// Well, you can use the third parameter, comprised of one or more element(s), to add to the array. 
// This can be incredibly useful for quickly switching out an element, or a set of elements, for another.

const numbers = [10, 11, 12, 12, 15];
const startIndex = 3;
const amountToDelete = 1;

numbers.splice(startIndex, amountToDelete, 13, 14);
// second 12 is removed
console.log(numbers);//[10,11,12,13,14,15]