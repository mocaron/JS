"use strict";

//3. Constant, r(read only)
//use const whenever possible.
const daysInWeek = 7;
const maxNumber = 5;

//Note!
//Immutable data types: primitive types, frozen objects(i.e. object.freeze())
//Mutable data types: all objects by default are mutable in JS
//favor immutable data type always for a few reasons:
// - security
// - thread safety
// - reduce human mistake

//4. Variable types
//primitive, single item: number, string, boolean, null, undefined, symbol
//object, box container
//function, first-class function

const count = 17; //integer
const size = 17.1; //decimal number
console.log(`Value: ${count}, type: ${typeof count}`);
console.log(`Value: ${size}, type: ${typeof size}`);

//number - special numericvalues: infinity,-infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = "not a number" / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

//string
const char = "c";
const bredan = "bredan";
const greeting = "hello " + bredan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${bredan}!`; //template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

//boolean
//false: 0, null, undefined, NaN, ''
//true: any other value
const canRead = true;
const test = 3 < 1; //false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

//null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

//undefined
let x;
console.log(`calue: ${x}, type: ${typeof x}`);

//symbol, create unique identifiers for objects
const symbol1 = Symbol("id");
const symbol2 = Symbol("id");
console.log(symbol1 === symbol2); //false
const gSymbol1 = Symbol.for("id");
const gSymbol2 = Symbol.for("id");
console.log(gSymbol1 === gSymbol2); //true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

//object, real=life object, data structure
const ellie = { name: "ellie", age: 20 };
ellie.age = 21;

//5. Dynamic typing: dynamically typed language
let text = "hello";
console.log(text.charAt(0)); //h
console.log(`value: ${text}, type: ${typeof text}`); //hello, string
text = 1;
console.log(`value: ${text}, type: ${typeof text}`); //1,number
text = "7" + 5;
console.log(`value: ${text}, type: ${typeof text}`); //75, string
text = "8" / "2";
console.log(`value: ${text}, type: ${typeof text}`); // 4, number
