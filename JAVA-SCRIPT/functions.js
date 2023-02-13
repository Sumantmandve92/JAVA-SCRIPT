// The actual values that are input (or "passed") into a function when it is called are known as arguments.
// parameterised function---------------------------------------------->
function functionWithArgs(prm1,prm2)
{
  console.log( prm1+prm2);
  
}
functionWithArgs(1,2);
functionWithArgs(7,9);
// we can return any data type value ,there is no restriction 
function timesFive(arg)
{
    if(arg<0)
    {
        return "negative ";
    }
    else
    {
        return arg*5;
    }

}
timesFive(5);