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

console.log(Object.getPrototypeOf({}) == Object.prototype);
// true
console.log(Object.getPrototypeOf(Object.prototype));
// null

console.log(Object.getPrototypeOf(isNaN) == Function.prototype);
// true
console.log(Object.getPrototypeOf([]) == Array.prototype);
// true

var protoRabbit = {
    speak: function(line) {
        console.log("The " + this.type + " rabbit says '" + line + "'");
    }
};
var killerRabbit = Object.create(protoRabbit);
killerRabbit.type = "killer";
killerRabbit.speak("SKREEEE!");

// a constructor is a more convenient way to create objects from some shared prototype
// convention: capitalize names of constructors

function Rabbit(type) {
    this.type = type;
}

var killerRabbit = new Rabbit("killer");
var blackRabbit = new Rabbit("black");
console.log(killerRabbit.type);
console.log(blackRabbit.type);

// add a method with the constructor
Rabbit.prototype.speak = function(line) {
    console.log("The " + this.type + " rabbit says '" + line + "'");
};
blackRabbit.speak("Doom...");

// properties are added to objects
Rabbit.prototype.teeth = "small";
console.log(killerRabbit.teeth);
// small
killerRabbit.teeth = "long, sharp and bloody";
console.log(killerRabbit.teeth);
// long, sharp and bloody
console.log(blackRabbit.teeth);
// small
console.log(Rabbit.prototype.teeth);
// small


// a prototype can be used at any time to add new properties and methods to all objects based on it
Rabbit.prototype.dance = function() {
    console.log("The " + this.type + " rabbit dances a jig.");
};
killerRabbit.dance();
// The killer rabbit dances a jig.

// sometimes prototypes get in the way and it's better to have prototype-less objects
// pass null as the specified prototype to create fresh object with no prototype
var pupper = Object.create(null);

// we can specify properties that look like normal properties but secretly have methods associated with them
var pile = {
    elements: ["eggshell", "orange peel", "worm"],
    get height() {
        return this.elements.length;
    },
    set height(value) {
        console.log("Ignoring attempt to set height to", value);
    }
};
console.log(pile.height);
// 3
pile.height = 100;
// Ignoring attempt to set height to 100


