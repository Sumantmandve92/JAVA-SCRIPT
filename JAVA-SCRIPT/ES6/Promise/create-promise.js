/* A promise in JavaScript is exactly what it sounds like - you use it to make a promise to do something, 
 usually asynchronously. When the task completes, you either fulfill your promise or fail to do so. 
 Promise is a constructor function, so you need to use the new keyword to create one. 
 It takes a function, as its argument, with two parameters - resolve and reject. 
 These are methods used to determine the outcome of the promise. The syntax looks like this:*/

const myPromise = new Promise((resolve, reject) => {

});

// Note==================================================================================>
/*A promise has three states: pending, fulfilled, and rejected. 
The promise you created in the last challenge is forever stuck in the pending state
 because you did not add a way to complete the promise. 
 The resolve and reject parameters given to the promise argument are used to do this.
  resolve is used when you want your promise to succeed, and reject is used when you want it to fail. 
  These are methods that take an argument, as seen below.*/


// Question===============================================================================>
/*Make the promise handle success and failure. 
If responseFromServer is true, call the resolve method to successfully complete the promise.
 Pass resolve a string with the value We got the data. 
 If responseFromServer is false, use the reject method instead and pass it the string: Data not received.*/


 const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer represents a response from a server
    let responseFromServer=true;
      
    if(responseFromServer) {
      resolve("We got the data");
    } else {  
     reject("Data not received");
    }
  });

  /*The example above uses strings for the argument of these functions, 
  but it can really be anything. Often, it might be an object, 
  that you would use data from, to put on your website or elsewhere.*/