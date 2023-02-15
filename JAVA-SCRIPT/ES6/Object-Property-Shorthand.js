const createPerson = (name, age, gender) => {
 
    return ({ name,age,gender});
    //  before ES6 we do like below
    //return ({name:name,age:age,gender:gender})
   
  };
//   ES6 provides the syntactic sugar to eliminate the redundancy of having to write {name: name}.
//  You can simply write 'name' once, and it will be converted to {name: name} (or something equivalent) under the hood.
//  Here is the same function from above rewritten to use this new syntax: