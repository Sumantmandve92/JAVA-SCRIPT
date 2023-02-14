
// In this example, we initialize the value of ourArray to an empty array and the value of i to 5. 
// When we execute the while loop, the condition evaluates to false because i is not less than 5, 
// so we do not execute the code inside the loop. The result is that ourArray will end up with no values added to it, 
// and it will still look like [] when all of the code in the example above has completed running. 
// Now, take a look at a do...while loop:

const myArray = [];
let i = 10;
do {
    myArray.push(i);
    i++;
}
while (i < 5) 