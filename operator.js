//1. String concatenation
console.log("my" + "cat");
console.log("1" + 2);
console.log(`String literals: 1 + 2 = ${1 + 2}`); //1 + 2 = 3

//2. Numeric operators
console.log(1 + 1);
console.log(1 - 1);
console.log(1 / 1);
console.log(1 / 1);
console.log(5 % 2);
console.log(2 ** 3); //exponentiation

//3.Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
//counter = counter + 1;
//preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`); //3,3
const postIncrement = counter++;
//postIncrement = couner;
//counter = counter + 1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`); //3, 4

//4.Assignment operators;
let x = 3;
let y = 6;
x += y; // x = x +  y;

//5. Comparison operators
console.log(10 <= 6); //false
console.log(10 >= 6); //true

//6. Logical operators: || (or), && (and), ! (not)
const value1 = false;
const value2 = 4 < 2; //false

// || (or), finds the first truthy value
console.log(`or: ${value1 || value2 || check()}`); //시간 오래걸리는 함수는 뒤로 배치

// && (and), finds the first falsy value
console.log(`and: ${value1 && value2 && check()}`);

//often used to compress long if-statement
//nullableObject && nullableObject.something
//if (nullableObject != null){
//  nullableObject.something;
//}

function check() {
  for (let i = 0; i < 10; i++) {
    //wasting time
    console.log("★"); //value1 이 true 일 때 출력 x
  }
  return true;
}

// ! (not)
console.log(!value1);

//7. Equality
const stringFive = "5";
const numberFive = 5;

// == lose equality, with type conversiong
console.log(stringFive == numberFive); //true
console.log(stringFive != numberFive);

//=== strict equality, no type conversion
console.log(stringFive === numberFive); //false
console.log(stringFive !== numberFive);

//object equality by reference
const ellie1 = { name: "ellie" };
const ellie2 = { name: "ellie" };
const ellie3 = ellie1;
console.log(ellie1 == ellie2); //false, 아예 다른 곳 가리킴
console.log(ellie1 === ellie2); //false
console.log(ellie1 === ellie3); //true

//equality - puzzler
console.log(0 == false); //true
console.log(0 === false); //false 0은 boolean type이 아님
console.log("" == false); //true
console.log("" === false); //false
console.log(null == undefined); //true (같은 것으로 간주되나 같은 type은 아님)
console.log(null === undefined); //false

//8. Conditional operator: if
//if, else, if,else
const name = "ellie";
if (name === "ellie") {
  console.log("Welcome, Ellie!");
} else if (name === "corder") {
  console.log("You are amazing coder");
} else {
  console.log("unknown");
}

//9. Ternary operator: ?
// condition ? value1 : value2;
console.log(name === "ellie" ? "yes" : "no"); //false 라 뒤의 값인 no 출력

//10. Swtich statement
//use for multiple if checks
//use for enum-like value check
//use for multiple type checks in TS
const browser = "IE";
switch (browser) {
  case "IE":
    console.log("go away!");
    break;
  case "Chrome":
  case "Firefox":
    console.log("love u");
    break;
    defualt: console.log("same all!");
    break;
}

//11. Loop
//while loop, while the condition is truthy,
//body code is executed actions
let i = 3;
while (i > 0) {
  console.log(`while: ${i}`);
  i--;
} // 3 2 1 만 출력 (끝나면 i=0)

//do while loop, body code is excuted first,
//then check the condition.
do {
  console.log(`do while: ${i}`);
  i--;
} while (i > 0); //0

//for loop, for(begin; condition; step)
for (i = 3; i > 0; i--) {
  console.log(`for: ${i}`);
} // 3 2 1

for (let i = 3; i > 0; i = i - 2) {
  //inline variable declaration
  console.log(`inline variable for: ${i}`); // 3 1
}

// nested loops
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    console.log(`i: ${i}, j: ${j}`);
  }
} //j부터 커지고 i 하나씩 증가

//break, continue
for (let i = 0; i < 11; i++) {
  if (i % 2 === 0) continue;
  console.log(`i = ${i}`);
}

for (let i = 0; i < 10; i++) {
  if (i >= 8) break;
  console.log(`i = ${i}`);
}
