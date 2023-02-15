

// When defining functions within objects in ES5, we have to use the keyword function as follows:

const person = {
    name: "Taylor",
    sayHello: function() {
      return `Hello! My name is ${this.name}.`;
    }
  };



// With ES6, you can remove the function keyword and colon altogether when defining functions in objects

const bicycle = {
    gear: 2,
    setGear(newGear) {
      this.gear = newGear;
    }
  };
//  set gear property by setGear function
  bicycle.setGear(3);
  console.log(bicycle.gear);