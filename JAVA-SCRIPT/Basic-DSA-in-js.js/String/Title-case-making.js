// Return the provided string with the first letter of each word capitalized. 
// Make sure the rest of the word is in lower case.
function titleCase(str) {

    let strArr = str.split(" ");
    str = "";
    for (let i = 0; i < strArr.length; i++) {
        str = str + " " + strArr[i][0].toUpperCase() + strArr[i].substring(1).toLowerCase()
    }
    str = str.trim();
    return str;
}

titleCase("I'm a little tea pot");