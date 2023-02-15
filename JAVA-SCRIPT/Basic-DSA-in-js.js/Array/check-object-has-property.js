
/*Finish writing the function so that it returns true if the object passed to it contains 
all four names, Alan, Jeff, Sarah and Ryan and returns false otherwise.*/


let users = {
    Alan: {
        age: 27,
        online: true
    },
    Jeff: {
        age: 32,
        online: true
    },
    Sarah: {
        age: 48,
        online: true
    },
    Ryan: {
        age: 19,
        online: true
    }
};

// JavaScript provides us with two different ways to do this.
//  One uses the hasOwnProperty() method and
//  the other uses the "in" keyword.
function isEveryoneHere(userObj) {

    return ('Alan' in userObj && 'Jeff' in userObj && 'Sarah' in userObj && 'Ryan' in userObj) ? true : false;

}

console.log(isEveryoneHere(users));