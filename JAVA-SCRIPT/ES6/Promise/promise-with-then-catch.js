// Handle a Fulfilled Promise with then
/* Promises are most useful when you have a process that takes an unknown amount of time in your code (i.e. something asynchronous),
  often a server request. When you make a server request it takes some amount of time, 
  and after it completes you usually want to do something with the response from the server. 
  This can be achieved by using the then method. 
  The then method is executed immediately after your promise is fulfilled with resolve. 
  Here’s an example:*/

  const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer is set to true to represent a successful response from a server (it can be anything)
    let responseFromServer = true;
      
    if(responseFromServer) {
      resolve("We got the data");
    } else {  
      reject("Data not received");
    }
  });


//   then=>(result and error is a variable name)
  makeServerRequest.then(result=>{
    // after successfull resolve we want some execution of code after that ,so these code i write in 'then' 
    console.log(result);
  });

//   catch=>
makeServerRequest.catch(error => {
   // after unsuccessfull resolve 'makeServerRequest' will give code present in the 'reject',
    // we want some execution of code after that ,so these code i write in 'catch' 
    console.log(error);
  });