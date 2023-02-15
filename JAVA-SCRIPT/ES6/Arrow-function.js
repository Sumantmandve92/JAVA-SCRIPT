//=======================Arrow function Or Anonymous function================================>
// anonymous=>without name
//In JavaScript, we often don't need to name our functions,
//  especially when passing a function as an argument to another function. 
// Instead, we create inline functions. 
// We don't need to name these functions because we do not reuse them anywhere else.
const greaterThan = function (num) {
    return num > 10;
}
// the above function can be written as 
const greaterthan = (num) => { return num > 10; }
// the above function can also written as if only return stmt is there
const GreaterThan = (num) => num > 10;
// now this function can be passed as parameter to another function
function newMethod(GreaterThan, arr) {
    arr.GreaterThan(num);
}