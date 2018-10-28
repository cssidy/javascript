// assert function

// 1
// Have to write assert function
/*
function sum() {
    var sum = 0;
    for(var i=0; i<arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

assert(sum(1,2,3) === 6, 'Sum of first three numbers is 6');
assert(sum(1,2,3,4) === 10, 'Sum of first four numbers is 10');
*/

// 2

function getSamurai(samurai) {
    "use strict";
    arguments[0] = "Ishida";
    return samurai;
}

function getNinja(ninja) {
    arguments[0] = "Fuma";
    return ninja;
}

const samurai = getSamurai("Toyotomi");
const ninja = getNinja("Yoshi");

console.log(samurai, ninja);

// 3
function whoAmI1() {
    "use strict";
    return this
}

function whoAmI2() {
    return this
}

// console.log(whoAmI1(), whoAmI2());
console.assert(whoAmI1() === global, "This function IS NOT global");
console.assert(whoAmI2() === global, "This function IS NOT global");

// 4
/* const ninja1 = {
    whoAmI: function() {
        return this;
    }
};

const ninja2 = {
    whoAmI: ninja1.whoAmI()
};

const identify = ninja2.whoAmI;

console.assert(ninja1.whoAmI() === ninja1, "ninja1?");
// not a function error - console.assert(ninja2.whoAmI() === ninja1, " ninja1 again?");
// not a function error - console.assert(identify() === ninja1, "ninja1?");
console.assert(ninja1.whoAmI() === ninja2, "ninja2 here?");




// 5
function Ninja() {
    this.whoAmI() = () => this;
    // says this is not a function
}

const ninja1 = new Ninja();
const ninja2 = {
    whoAmI: ninja1.whoAmI()
};

*/

// 6
function Ninja() {
    this.whoAmI = function(){
        return this;
    }.bind(this);
}

const ninja1 = new Ninja();
const ninja2 = {
    whoAmI: ninja1.whoAmI
};

console.assert(ninja1.whoAmI() === ninja1, "ninja1 here?");
console.assert(ninja2.whoAmI() === ninja2, "ninja2 here?");