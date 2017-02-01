/**
 * Created by cassidy on 2/1/17.
 */

function plus1(x) {
    return x+1;
}

plus1(1)

var square = function(x) {
    return x*x;
};

square(2)
// invoke two functions in one expression
square(plus1(4))


// a function to compute the absolute value
function abs(x) {
    if (x >= 0) {
        return x;
    }
    else {
        return -x;
    }
}

abs(1)

// a function to compute factorials
function factorial(n) {
    var product = 1;
    while(n > 1) {
        product *= n;
        n--;
    }
    return product;
}

factorial(4)
// => 24: 1*4*3*2

// another version of factorials using a different loop
function factorial2(n) {
    var i, product = 1;
    for(i=2; i <=n; i++)
        product *= i;
    return product;
}

factorial2(5)