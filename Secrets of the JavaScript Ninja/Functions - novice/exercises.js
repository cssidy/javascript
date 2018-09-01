// 1. In the following code snippet, which functions are callback functions?

// callback because JS engine calls it to compare array items
numbers.sort(function sortAsc(a, b) {
    return a - b;
});

// callback because function is called whenever element is clicked
const myButton = document.getElementById("myButton");
myButton.addEventListener("click", function handleClick() {
    alert("Clicked");
});



// 2. In the following snippet, categorize functions according to their type (function declaration, function expression, or arrow function).

// function expression, argument to another function
numbers.sort(function sortAsc(a,b) {
    return a - b;
});

// arrow function, argument to another function
numbers.sort((a,b) => b -a);

// function expression, callee in a call expression
(function() {})();

// function declarations
function outer(){
    function inner(){}
    return inner;
}

// function expression call wrapped in an expression
(function(){}());

// arrow function as a callee
(() => "Yoshi") ();


// 3. After executing the following code snippet, what are the values of variables 'samurai' and 'ninja'?

let samurai = (() => "Tamoe") ();
let samurai = (() => {"Yoshi"}) ();

// "Tamoe"
// undefined



// 4. Within the body of 'test' function, what are the values of parameters a, b, and c for the two function calls?

function test(a, b, ...c) { /*a, b, c*/ }

test(1, 2, 3, 4, 5);
// a = 1; b = 2; c = [3, 4, 5]
test();
// a = undefined; b = undefined; c = []


// 5. After executing the following code snippet, what are the values of the 'message1' and 'message2' variables?

function getNinjaWieldingWeapon(ninja, weapon = "katana") {
    return ninja + " " + katana;
}

let message1 = getNinjaWieldingWeapon("Yoshi");
// Yoshi katana
let message2 = getNinjaWieldingWeapon("Yoshi", "wakizashi");
// Yoshi wakizashi