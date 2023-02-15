// Use Destructuring Assignment to Pass an Object as a Function's Parameters
// ====================================================================================================>
// In some cases, you can destructure the object in a function argument itself.
// Use destructuring assignment within the argument to the function half to send only max and min inside the function.
const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
  };
  
  // Only change code below this line
  const half = ({max,min}) => (max + min) / 2.0;
//  in 'half' function we want only 'max and min ' property 
// suppose if u passed 'stats' object directly to 'half' function it will destructure object in parenthesis as below
half(stats);