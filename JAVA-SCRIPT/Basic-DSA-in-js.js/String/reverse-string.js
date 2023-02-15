function reverseString(str) {
    let nstr="";
    for(let i=0;i<str.length;i++)
    {
      nstr=str[i]+nstr;
    }
    return nstr;
  }
  
  reverseString("hello");