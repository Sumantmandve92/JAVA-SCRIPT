/*==========Check For The Presence of an Element With indexOf()================================================>



Since arrays can be changed, or mutated, at any time, 
there's no guarantee about where a particular piece of data will be on a given array, or 
if that element even still exists. 
Luckily, JavaScript provides us with another built-in method, indexOf(), 
that allows us to quickly and easily check for the presence of an element on an array. 
indexOf() takes an element as a parameter, and when called, it returns the position, or index, of that element, or 
-1 if the element does not exist on the array.*/


function quickCheck(arr, elem) {

    if (arr.indexOf(elem) >= 0) {
        return true;
    }
    else {
        return false;
    }

}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));//false