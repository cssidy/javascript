/**
 * Created by cassidy on 2/23/18.
 */

const re1 = new RegExp("abc")
const re2 = /abc/
const eighteenPlus = /eighteen\+/
const phrase = "Hello 1992"
const dateTime = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/
const neighbor = /neighbou?r/;
const advDateTime = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/;
const phoneNumber = "30-01-2003 19:45"

console.log(/abc/.test("abcde"))
console.log(/abc/.test("axdfg"))
console.log(re1.test("abc"))
console.log(eighteenPlus.test("eighteen+"))
console.log(/[0123456789]/.test("in 1992"))
console.log(/[0-9]/.test(phrase))
console.log(dateTime.test(phoneNumber))
console.log(neighbor.test("neighbour"))
console.log(advDateTime.test(phoneNumber))

const match = /\d+/.exec("one two 100")
console.log(match)
console.log(match.index)
console.log("one tow 100".match(/\d+/));

console.log(new Date())
let rightNow = new Date()
console.log(new Date(2009, 11, 9))
console.log(new Date(2009, 11, 9, 12,59,59, 99))

function findDate(string) {
    const dateTime = /^(\d{1,2})-(\d{1,2})-(\d{4})$/;
    const match = dateTime.exec(string);
    return new Date(Number(match[3]),
                    Number(match[2]) - 1,
                    Number(match[1]));
}
console.log(findDate("30-1-2003"));

const animalCount = /\b\d+ (pig|cow|chicken)s?\b/;
console.log(animalCount.test("15 pigs"));
console.log(animalCount.test("15 pigchickens"));

console.log("papa".replace("p", "m"))
console.log("papa".replace(/[p]/g, "m"));


// reverse names Lastname, Firstname to Firstname Lastname
console.log("Hopper, Grace\nMcCarthy, John\nRitchie, Dennie".replace(/([\w ]+), ([\w ]+)/g, "$2 $1"));

// pass function as second argument to replace
let s = "the cia and fbi";
console.log(s.replace(/\b(fbi|cia)\b/g, function(str) {
    return str.toUpperCase();
}));

// found a bug in this example: 0 eggs goes to -1 eggs, but 1 eggs goes to no eggs
const stock = "10 lemon, 2 cabbages, and 0 eggs";
function minusOne(match, amount, unit) {
    amount = Number(amount) - 1;
    if (amount == 1)
        unit = unit.slice(0, unit.length - 1);
    else if (amount == 0)
        amount = "no";
    return amount + " " + unit;
}
console.log(stock.replace(/(\d+) (\w+)/g, minusOne));

