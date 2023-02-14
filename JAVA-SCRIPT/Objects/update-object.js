const myDog = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
  };
//    You can use either dot or bracket notation to update.
//   if property name exist in object then it will update with new value
//   myDog["name"]="Happy Coder"; OR
myDog.name="Happy Coder";
  console.log(myDog)
// if property name not exist in object then it will add new key-value pair in object.
  myDog["color"]="brown";
  console.log(myDog)