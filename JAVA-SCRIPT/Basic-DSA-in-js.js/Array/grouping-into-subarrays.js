/*Write a function that splits an array (first argument) into
 groups the length of size (second argument) and returns them as a two-dimensional array.*/
function chunkArrayInGroups(arr, size) {
    let narr = [];
    let subarr = [];
    for (let i = 0; i < arr.length; i++) {
        if (subarr.length < size) {
            subarr.push(arr[i]);
        }
        else {
            narr.push(subarr);
            subarr = [];
            subarr.push(arr[i]);
        }
    }
    narr.push(subarr);

    return narr;
}

chunkArrayInGroups(["a", "b", "c", "d", "j"], 3);


// chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3) should return [[0, 1, 2], [3, 4, 5], [6]].