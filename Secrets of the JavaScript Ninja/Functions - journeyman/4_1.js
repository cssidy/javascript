// implicit function parametes




function whatever(a, b, c) {
    assert(a === 1, 'The value of a is 1');
    assert(b === 2, 'The value of b is 2');
    assert(b === 3, 'The value of c is 3');

    assert(arguments.length === 5, 'There are 5 arguments');

    assert(arguments[0] === a, 'The first argument is a');
    assert(arguments[1] === b, 'The first argument is b');
    assert(arguments[2] === c, 'The first argument is c');
    assert(arguments[3] === d, 'We can access the fourth argument');
    assert(arguments[4] === e, 'We can access the fifth argument');
}

whatever(1, 2, 3, 4, 5);