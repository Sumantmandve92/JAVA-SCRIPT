// Comparison with the Greater Than Or Equal To Operator---------------------------------------------->
// The greater than or equal to operator (>=) compares the values of two numbers. 
// If the number to the left is greater than or equal to the number to the right, 
// it returns true. Otherwise, it returns false.

// {important line}Like the equality operator, the greater than or equal to operator will convert data types while comparing.

Examples

6 >= 6  // true
7 >= '3' // true
2 >= 3  // false
'10' >= 9  // true
// Logical operator--------------------------------------------------------------------------->
// ====AND=====>
function testLogicalAnd(val) {


    if (val <= 50 && val >= 25) {

        return "Yes";

    }


    return "No";
}

testLogicalAnd(10);
//   =====OR=========>
function testLogicalOr(val) {


    if (val > 20 || val < 10) {
        return "Outside";
    }


    return "Inside";
}

testLogicalOr(15);
