
function phoneticLookup(val) {
    let result = "";
    switch(val) {
      case "alpha":
        result = "Adams";
        break;
      case "bravo":
        result = "Boston";
        break;
      case "charlie":
        result = "Chicago";
        break;
      case "delta":
        result = "Denver";
        break;
      case "echo":
        result = "Easy";
        break;
      case "foxtrot":
        result = "Frank";
    }

    return result;
  }
  
  phoneticLookup("charlie");
// convert switch statement into object=================================================>
function phoneticLookup(val) {
    let result = "";
    const lookup={"alpha":"Adams","bravo":"Boston", "charlie":"Chicago","delta":"Denver","echo":"Easy","foxtrot":"Frank"}
    result=lookup[val];
    return result;
  }
  
  phoneticLookup("charlie");