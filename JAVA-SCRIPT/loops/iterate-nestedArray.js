// This outputs each sub-element in arr one at a time. 
// Note that for the inner loop, we are checking the .length of arr[i], 
// since arr[i] is itself an array.
// ==================================================>
// product of all element
function multiplyAll(arr) {
    let product = 1;

  for(let i=0;i<arr.length;i++)
  {
    for(let j=0;j<arr[i].length;j++)
    {
      product*=arr[i][j];
    }
  }
    return product;
  }
  
  multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);