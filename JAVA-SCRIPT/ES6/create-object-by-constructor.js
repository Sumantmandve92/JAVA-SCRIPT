

// ES6 provides a new syntax to create objects, using the class keyword.

/*In ES5, an object can be created by defining a constructor function and 
 using the new keyword to instantiate the object.*/

// In ES6, a class declaration has a constructor method that is invoked with the new keyword. 
// If the constructor method is not explicitly defined, then it is implicitly defined with no arguments.



// ===============================================================================================>
//Note=> UpperCamelCase should be used by convention for ES6 class names, as in SpaceShuttle used above.
class Vegetable
{
 
  constructor(name)
  {
    this.name=name;
  }
}

const carrot = new Vegetable("carrot");
console.log(carrot.name);