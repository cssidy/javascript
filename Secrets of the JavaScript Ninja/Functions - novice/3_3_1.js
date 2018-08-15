// defining functions


// function declarations and function expressions
function myFun() {
    console.log("fun");
}
myFun();


function myFunctionName ( myFirstArg, mySecondArg ) {
    myStatement1;
    myStatement2;
}


function samurai() {
    console.log("samurai here");
}


function ninja() {

    function hiddenNinja() {
        console.log("ninja here");
    }

    console.log(hiddenNinja());
}


function myFunctionDeclaration() {
    function innerFunction() {}
}


var myFunc = function() {};
myFunc(function() {
    return function() {};
});

(function namedFunctionExpression () {}) ();

+function() {} ();
-function() {} ();
!function() {} ();
~function() {} ();





// arrow or lambda functions
myArg => myArg * 2

var values = [0, 3, 2, 5, 7, 4, 8, 1];
values.sort(function(value1, value2) {
    console.log(value1 - value2);
});


// function constructors
new Function('a', 'b', 'return a + b');

// generator functions
function* myGen() { yield 1; }