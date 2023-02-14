/*Testing Objects for Properties
Sometimes it is useful to check if the property of a given object exists or not. 
We can use the .hasOwnProperty(propname) method of objects to determine 
if that object has the given property name.
 .hasOwnProperty() returns true or false if the property is found or not.*/
//  ==================================================================================>


function checkObj(obj, checkProp) {

    // if found return value
    if(obj.hasOwnProperty(checkProp))
    {
      return obj[checkProp];
    }
    else
    {
      return "Not Found";
    }
    
  }
  const obj={gift: "pony", pet: "kitten", bed: "sleigh"};
  checkObj(obj,"gift");