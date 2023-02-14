/*Build JavaScript Objects===============================>
You may have heard the term object before.

Objects are similar to arrays, except that instead of using indexes to 
access and modify their data, you access the data in objects through what are called properties.*/
const myDog = {
    name: "tomy",
    legs: 4,
    tails: 1,
    friends: ["moti", "googly"]

};
// ==========================================================================>
// Access properties with dot notation
const testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
};


const hatValue = testObj.hat;
const shirtValue = testObj.shirt;
//   =======================================================>
//Access properties with [] (bracket) notation
// Note that property names with spaces in them must be in quotes (single or double).

const hatValue1 = testObj["hat"];
const shirtValue1 = testObj["shirt"];
let prop = "shoes";
const shoesValue1 = testObj[prop];
