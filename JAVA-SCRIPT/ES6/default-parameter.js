// Set Default Parameters for Your Functions
// In order to help us create more flexible functions, ES6 introduces default parameters for functions.
function person (name="tony",age)
{
    console.log("my name is "+name+" and my age is "+age);
}

person(45);//here name is 'tony'
person("shubham",23);//here name is shubham in console