function confirmEnding(str, target) {
  
    return str.substring(str.length-target.length)==target;
    
  }
  
  confirmEnding("Bastia", "n");

//   This challenge can be solved with the .endsWith() method.