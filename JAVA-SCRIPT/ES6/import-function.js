import {uppercaseString,lowercaseString}  from './export-function.js';

import { add } from './export-function.js'
import * as stringFunctions from './export-function.js';//to import all functions at once

// Here, import will find add in export-function.js,(present in ES6 folder) 
// import just that function for you to use, and ignore the rest.
//  The ./ tells the import to look for the math_functions.js file in the same folder as the current file. 
// The relative file path (./) and file extension (.js) are required when using import in this way.




uppercaseString("hello");
lowercaseString("WORLD!");
let sum=add(4,5);
console.log(sum);
stringFunctions.uppercaseString("hello");