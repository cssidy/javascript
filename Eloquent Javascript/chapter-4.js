/**
 * Created by cassidy on 2/9/18.
 */

var mack = [];
mack.push('Mack');
mack.push('the', 'Knife');

console.log(mack.join(" "));
console.log(mack);
console.log(mack.pop());
console.log(mack);


var todoList = [];
function rememberTo(task) {
    todoList.push(task);
}
function whatIsNext() {
    return todoList.shift();
}
function urgentlyRememberTo(task) {
    todoList.unshift(task);
}

rememberTo('study Javascript');
whatIsNext('make dinner');
urgentlyRememberTo('breath');
console.log(todoList);

console.log([1,2,3,2,1].indexOf(2));
console.log([1,2,3,2,1].lastIndexOf(2));

console.log([0,1,2,3,4].slice(2,4));
console.log([0,1,2,3,4].slice(2));

function argumentCounter() {
    console.log("You gave me", arguments.length, "arguments.");
}
argumentCounter("Straw man", "Tautology", "Ad hominem");

console.log(Math.floor(Math.random() * 10));