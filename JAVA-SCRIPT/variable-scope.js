//Global Scope -------------------------------------------------------------->
// In JavaScript, scope refers to the visibility of variables. 
// Variables which are defined outside of a function block have Global scope. 
// This means, they can be seen everywhere in your JavaScript code.

// Variables which are declared without the let or const keywords are automatically created in the global scope. 
// This can create unintended consequences elsewhere in your code or when running a function again. 
// You should always declare your variables with let or const.
var a=10;//globle scope
const num=4;//globlescope
let prm="nano";//globle scope
function print()
{
    const prm1=65545;//block scope everywhere inside print function but not outside
    var sum=4;//globle scope
    function hallo()
    {
        const prm2=87;//block scope everywhere inside hello function but not outside

    }
}
// same name variable
// It is possible to have both local and global variables with the same name.
//  When you do this, the local variable takes precedence over the global variable.
const outerWear = "T-Shirt";

function myOutfit() {
  
let outerWear="sweater";
  
  return outerWear;
}

myOutfit();//return sweater



// undefined function---------------------------------------------->
// the function with no return stmt will return undefined(void in java)