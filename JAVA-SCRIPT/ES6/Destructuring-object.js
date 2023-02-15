// Use Destructuring Assignment to Extract Values from Objects=================================>
// Destructuring assignment is special syntax introduced in ES6, 
// for neatly assigning values taken directly from an object.

// Consider the following ES5 code:

const user = { name: 'John Doe', age: 34 };

// const name = user.name;
// const age = user.age;
// name would have a value of the string John Doe, and age would have the number 34.

// Here's an equivalent assignment statement using the ES6 destructuring syntax:

const { name, age } = user;
// Again, name would have a value of the string John Doe, and age would have the number 34.

// Here, the name and age variables will be created and assigned the values of their respective values from the user object. You can see how much cleaner this is.

// You can extract as many or few values from the object as you want.
Example:
const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  
//  here we can not access 'today' directly
  
  const {today,tomorrow} = HIGH_TEMPERATURES;
  //  here we can access 'today' directly
  console.log(today);



//   ==========================================================================================================================>
//   ==========================================================================================================================>
//   Use Destructuring Assignment to Assign Variables from Objects
// Destructuring allows you to assign a new variable name when extracting values.
//  You can do this by putting the new name after a colon when assigning the value.

// Using the same object from the last example:

const user1 = { name: 'John Doe', age: 34 };
// Here's how you can give new variable names in the assignment:

const { name: userName, age: userAge } = user1;
// You may read it as "get the value of user.name and assign it to a new variable named userName" and so on. 
// The value of userName would be the string John Doe, and the value of userAge would be the number 34.
console.log(userName+" "+userAge);
// ========================================================================================================================>
// ========================================================================================================================>
// destructuring on nested object
Example:
const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
  };
    
  const { today:{low:lowToday,high:highToday}}=LOCAL_FORECAST;
  console.log(lowToday)