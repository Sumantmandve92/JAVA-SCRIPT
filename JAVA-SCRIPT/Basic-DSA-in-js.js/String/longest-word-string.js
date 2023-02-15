function findLongestWordLength(str) {
    let arr = str.split(" ");
    let maxlength = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > maxlength) {
            maxlength = arr[i].length;
        }
    }

    return maxlength;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));