/*Define a Constructor Function==================================================>
Constructors are functions that create new objects. 
They define properties and behaviors that will belong to the new object. 
Think of them as a blueprint for the creation of new objects.*/

// Here is an example of a non parameterised constructor=================>:

function Bird() {
    this.name = "Albert";
    this.color = "blue";
    this.numLegs = 2;
}
/*This constructor defines a Bird object with properties name, color, and numLegs set to Albert, blue, and 2, respectively. 
=>Constructors follow a few conventions===>:

Constructors are defined with a capitalized name to distinguish them from other functions that are not constructors.
Constructors use the keyword this to set properties of the object they will create. Inside the constructor, 
this refers to the new object it will create.
Constructors define properties and behaviors instead of returning a value as other functions might.*/

// =create object==>

let blueBird = new Bird();//non parameterised constructor
console.log(blueBird.name);

/*NOTE: this inside the constructor always refers to the object being created.

Notice that the new operator is used when calling a constructor.
 This tells JavaScript to create a new instance of Bird called blueBird. 
 Without the new operator, this inside the constructor would not point to the newly created object, giving unexpected results.
  Now blueBird has all the properties defined inside the Bird constructor:*/




//parameterised constructor=======================>
function Dog(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 4;
}
let terrier = new Dog("moti", "brown");