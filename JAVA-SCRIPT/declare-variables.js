function printAllvariables()
{
  // (1) undefined
  var myName;//by default it is undefined means not initialized
  console.log(typeof un);// undefined
  // (2) null
  var nothing=null;
    console.log(typeof nothing);//object
// (3) boolean
  var decide=true;
  console.log(typeof decide);//boolean
// (4) string
  let name="sumant";
  console.log(typeof name)

   let sym=Symbol('%');

   console.log(typeof sym);
  //  (6) bigint
   let bignumber=BigInt("7461152132362132333223333226333");
   console.log(typeof bignumber)
  //  (7)number
  let num=46;
  console.log(typeof num);
  // (8) object
  const obj={name:"Sumant",age:22};
  console.log(typeof obj);
  // (9) array(array also an object)
  const arr=[4,5,6,8,8];
  console.log(typeof arr);
  // (10) Set(object)
  const set=new Set();
  console.log(typeof set);
  // (11) NaN(number)
  let div=12/"hi";
  console.log(div);
  console.log(typeof div);



}
// function with no return statement will return undefined
console.log(printAllvariables())