console.log(typeof 4.5);
// number
console.log(typeof "x");
// string
console.log(-(10-2));
// -8
console.log(3 > 2);
// true
console.log(3 < 2);
// false
console.log("Aardvark" < "Zoroaster");
// true
console.log("Itchy" != "Scratchy");
// true
console.log(NaN == NaN);
// false
console.log(true && false);
// false
console.log(true && true);
// true
console.log(false || true);
// true
console.log(false || false);
// false
console.log(!false);
// true
console.log(!true);
// false
console.log(1 + 1 == 2 && 10 * 10 > 50);
// true

// type coercion
console.log(8 * null);
// 0
console.log("5" - 1);
// 4
console.log("5" + 1);
// 51
console.log("five" * 2);
// NaN
console.log(false == 0);
// true

console.log(null == undefined);
// true
console.log(null == 0);
// false
console.log("" === false);
// false
console.log(null || "user");
// user
console.log("Karl" || "user");
// Karl
