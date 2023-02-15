/*Use getters and setters to Control Access to an Object=========================================>
You can obtain values from an object and set the value of a property within an object.
These are classically called getters and setters.
Getter functions are meant to simply return (get) the value of an object's private variable to the user without the user directly accessing the private variable.
Setter functions are meant to modify (set) the value of an object's private variable based on the value passed into the setter function. 
This change could involve calculations, or even overwriting the previous value completely.*/


// ==========================================================================================================>
// Notice=> the syntax used to invoke the getter and setter. 
// They do not even look like functions. 
// Getters and setters are important because they hide internal implementation details.
// Note: It is convention to precede the name of a private variable with an underscore (_).
//  However, the practice itself does not make a variable private.
// ==========================================================================================================>



class Thermostat {

    constructor(far) {
        this._far = far;

    }
    get temperature() {

        return 5 / 9 * (this._far - 32);
    }
    set temperature(celsius) {
        this._far = celsius * 9.0 / 5 + 32;
    }
}

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
console.log(thermos.far);//will get 'undefined' because of underscore(_) makes it as private
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius