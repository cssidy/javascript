// functions

var square = function(x) {
    return x * x;
};

console.log(square(12));

var makeNoise = function() {
    console.log("Pling!")
};

makeNoise();

var power = function(base, exponent) {
    var result = 1;
    for (var count = 0; count < exponent; count++)
        result *= base;
    return result;
};

console.log(power(2, 10));

// local vs global variables

var x = "outside";

var f1 = function() {
    var x = "inside f1";
};

f1();
console.log(x);
// outside


var f2 = function() {
    x = "inside f2";
};

f2();
console.log(x);
// inside f2


// function with two mountains inside it
var landscape = function() {
    var result = "";
    var flat = function(size) {
        for (var count = 0; count < size; count++)
            result += "_";
    };
    var mountain = function(size) {
        result += "/";
        for (var count = 0; count < size; count++)
            result += "'";
        result += "\\";
    };

    flat(3);
    mountain(4);
    flat(6);
    mountain(1);
    flat(1);
    return result;
};

console.log(landscape());
// ___/''''\______/'\_





var launchMissiles = function(value) {
    missileSystem.launch("now");
};
if (safeMode)
    launchMissiles = function(value) {/* do nothing */};


function square(x) {
    return x * x;
}


// function declaration
// functions can be defined below the code that uses them, because function declarations are not
// part of regular top-to-bottom flow, they are conceptually moved to the top of scope and can be
// used by all code in that scope

function square(x) {
    return x * x;
}

console.log("The future says: ", future());

function future() {
    return "we STILL have no flying cars.";
}


// do not put function-definitions inside if statements
function example() {
    function a() {} // okay
    if (something) {
        function b() {} // danger, bad!
    }
}

// too much recursion!!
// function chicken() {
//      return egg();
// }
// function egg() {
//      return chicken();
// }
// console.log(chicken() + " came first.");


function power(base, exponent) {
    if (exponent == undefined)
        exponent = 2;
    var result = 1;
    for (var count = 0; count < exponent; count++)
        result *= base;
    return result;
}

console.log(power(4));
console.log(power(4, 3));



function wrapValue(b) {
    var localVariable = n;
    return function() { return localVariable; };
}


// closure

var wrap1 = wrapValue(1);
var wrap2 = wrapValue(2);
console.log(wrap1());
// 1
console.log(wrap2());
// 2


function multiplier(factor) {
    return function(number) {
        return number * factor;
    };
}

var twice = multiplier(2);
console.log(twice(5));
// 10





// recursion
// this version is 10 times slower than the first looping version
function power(base, exponent) {
    if (exponent == 0)
        return 1;
    else
        return base * power(base, exponent - 1);
}

console.log(power(2, 3));
// 8
// choose elegance > efficiency until you know the program is too slow, and if so, find out which
// parts are slow and start exchanging their elegance for efficiency

function findSolution(target) {
    function find(current, history) {
        if (current == target)
            return history;
        else if (current > target)
            return null;
        else
            return find(current + 5, "(" + history + " + 5)") || find(current * 3, "(" + history + " * 3)");
    }
    return find(1, "1");
}

console.log(findSolution(24));


function printFarmInventory(cows, chickens) {
    var cowString = String(cows);
    while (cowString.length < 3)
        cowString = "0" + cowString;
    console.log(cowString + " Cows");
    var chickenString = String(chickens);
    while (chickenString.length < 3)
        chickenString = "0" + chickenString;
    console.log(chickenString + " Chickens");
}
printFarmInventory(7, 11);

// more elegant and extendable
function zeroPad(number, width) {
    var string = String(number);
    while (string.length < width)
        string = "0" + string;
    return string;
}

function printFarmInventory(cows, chickens, pigs) {
    console.log(zeroPad(cows, 3) + " Cows");
    console.log(zeroPad(chickens, 3) + " Chickens");
    console.log(zeoPad(pigs, 3) + " Pigs")
}

printFarmInventory(7, 16, 3);
