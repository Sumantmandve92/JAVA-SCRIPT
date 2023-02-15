/* Return an array consisting of the largest number from each provided sub-array. 
For simplicity, the provided array will contain exactly 4 sub-arrays.*/

function largestOfFour(arr) {
    let nArr = [];
    for (let i = 0; i < arr.length; i++) {

        let max = arr[i][0];
        for (let j = 0; j < arr[i].length; j++) {

            //  max=arr[i][j]>max ? arr[i][j] :max;
            if (arr[i][j] > max) {
                max = arr[i][j];
            }

        }
        nArr.push(max);


    }
    console.log(nArr);
    return nArr;
   
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [-1000, -1001, -857, -1]]);//[5,27,39,-1]