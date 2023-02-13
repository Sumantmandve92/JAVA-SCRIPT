function reverseString(str)
{
  /*add each character of str in newstr from end to start */
  let newstr="";
  for(let i=str.length-1;i>=0;i--)
  {
    newstr+=str[i];
  }
  return newstr;
}

//console.log(reverseString("Parallelogram"));
/*console.log(reverseString("Universe"));*/
console.log(reverseString("SubString"));