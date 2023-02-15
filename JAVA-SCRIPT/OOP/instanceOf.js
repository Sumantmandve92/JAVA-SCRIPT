/*Verify an Object's Constructor with instanceof
Anytime a constructor function creates a new object, 
that object is said to be an instance of its constructor. 
JavaScript gives a convenient way to verify this with the instanceof operator. 
instanceof allows you to compare an object to a constructor, 
returning true or false based on whether or not that object was created with the constructor.*/


function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
}


let myHouse = new House(4);
myHouse instanceof House;
// This instanceof method would return true.

/*If an object is created without using a constructor, instanceof will verify that it is not an instance of that constructor:*/

let canary = {
  name: "Mildred",
  color: "Yellow",
  numLegs: 2
};

canary instanceof Bird;
// This instanceof method would return false.