/**
 * Created by cassidy on 2/15/18.
 */


// methods are properties that hold function values
var rabbit = {};
rabbit.speak = function(line) {
    console.log("The rabbit says '" + line + "'");
};

rabbit.speak("I'm alive.");

// a prototype is another object that is used as a fallback source of properties