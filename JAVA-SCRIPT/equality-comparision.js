function isEqual(param1, param2) {
    if (param1 == param2) {

        return "only content is equal";
        // 
    }
    else if (param1 === param2) {
        // this is strict equality operator
        return "content and its datatype also equal";
    }
    else {
        return "not equal at all";
    }
}
isEqual(12,"12");
isEqual("12","12");
isEqual(12,45);
// additional strict inequality
45 !==  45 // false
33 !== '33' // true
4 !==  3  // true
// 
1 !=  2    // true
1 != "1"   // false
1 != '1'   // false
1 != true  // false
0 != false // false
"" !=false //false
// becouse "",0  is false stmt  and 1 is true stmt in js 