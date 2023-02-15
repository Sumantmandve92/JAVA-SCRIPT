// Use Destructuring Assignment to Assign Variables from Arrays
// ES6 makes destructuring arrays as easy as destructuring objects.

// One key difference between the spread operator and 
// array destructuring is that the spread operator unpacks all contents of an array into a comma-separated list.
//  Consequently, you cannot pick or choose which elements you want to assign to variables.

// Destructuring an array lets us do exactly that:



// to get first two values
const [a, b] = [1, 2, 3, 4, 5, 6];
console.log(a, b);
// to get only second value
const [,c]=[1, 2, 3, 4, 5, 6];
console.log(c);//2
// last value
const [i, j,,,, k] = [1, 2, 3, 4, 5, 6];
console.log(i, j, k);//1,2,6 now 'k' is 6