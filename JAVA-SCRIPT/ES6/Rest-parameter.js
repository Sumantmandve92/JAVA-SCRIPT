/*Use the Rest Parameter with Function Parameters===================================>
In order to help us create more flexible functions, ES6 introduces the rest parameter for function parameters. 
With the rest parameter, you can create functions that take a variable number of arguments. 
These arguments are stored in an array that can be accessed later from inside the function.*/

//Check out this code:

function howMany(...args) {
  return "You have passed " + args.length + " arguments.";
}
console.log(howMany(0, 1, 2));
console.log(howMany("string", null, [1, 2, 3], { }));
/*The console would display the strings You have passed 3 arguments. and You have passed 4 arguments..

The rest parameter eliminates the need to check the args array and 
allows us to apply map(), filter() and reduce() on the parameters array.*/
// if function don't know how many number of parameters are coming then we use a one parameter called rest parameter
//  (denoted by three dot before variable name)
Example:
const sum = (...args) => {
    const arg = [...args];
    return arg.reduce((a, b) => a + b, 0);
  }
  sum(1,2,4,5,6,7,8,6);
  sum(5,6,5);