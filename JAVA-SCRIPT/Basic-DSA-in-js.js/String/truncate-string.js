// Truncate a string (first argument) if it is longer than the given maximum string length (second argument).
//  Return the truncated string with a ... ending.
function truncateString(str, num) {
 
    str=str.length>num ? (str.substring(0,num)+"..."):str;
  
    return str;
  }
  
  truncateString("A-tisket a-tasket A green and yellow basket", 50);