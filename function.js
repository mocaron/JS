//function
// - fundamental building block in the program
// - subprogram can be used multimple times
// - performs a task or calculates a value

// 1/ Function declaration
// function name(param1, param2) { body... return; }
// one function === one thing
// function is object in JS
function log(message) {
  console.log(message);
}
log("Hello");

// 2. Parameters
// premitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj) {
  obj.name = "coder";
}
const ellie = { name: "ellie" };
changeName(ellie);
console.log(ellie); //{ name: "coder" };

// 3. Default parameters (added in ES6)
function showMessage(message, from = "unknown") {
  console.log(`${message} by ${from}`);
}
showMessage("Hi");

// 4. Rest parameters (added in ES6)
function printAll(...args) {
  //배열 형태로 전달
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }

  for (const arg of args) {
    console.log(arg);
  }

  args.forEach((arg) => console.log(arg));
}
printAll("dream", "coding", "ellie");

// 5. Local scope
let globalMessage = "global";
function printMessage() {
  let message = "hello";
  console.log(message);
  console.log(globalMessage); //안에서 밖 접근가능
  function printAnother() {
    console.log(message); //부모함수의 변수 안에서 접근가능
    let childMessage = "hello";
  }
  //부모는 자식의 childMessage 접근 불가
}
printMessage();

// 6. Return a value
function sum(a, b) {
  return a + b;
}
const result = sum(1, 2);
console.log(`sum: ${sum(1, 2)}`);

// 7. Early return, early exit
// bad
function upgradeUser(user) {
  if (user.point > 10) {
    //long upgrade logic...
  }
}

//good
function upgradeUser(user) {
  if (user.poitnt <= 10) {
    return;
  }
  // long upgrade logic...
} //필요한 긴 과정을 if block 안에 넣지 말고, 필요 없는 경우를 빨리 함수 종료시켜라

// Frist-class function
// functions are treated like any other variable
//  can be assigned as a value to variable
//  can be passsed as an argument to other functions
//  can be returned by another function

// 1. Function expression
//  a function declaration can be called earlier than it is defined. (hoisted)
//  a function expression is created when the execution reaches it.
const print = function () {
  //annonymous function
  console.log("print");
};
print(); //이 밑으로만 사용 가능, expression이라
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
  if (answer === "love you") {
    printYes();
  } else {
    printNo();
  }
}

// anonymous function
const printYes = function () {
  console.log("yes!");
};

// named function
// better debugging in debugger's stack traces
// recursions
const printNo = function print() {
  console.log("no!");
};

randomQuiz("wrong", printYes, printNo);
randomQuiz("love you", printYes, printNo);

// Arrow function
// always anonymous
//const simplePrint = function () {
//    console.log('simplePrint');
//};

const simplePrint = () => console.log("simplePrint!");
const add = (a, b) => a + b;
const simpleMultiply = (a, b) => {
  //do something more
  return a * b; //block 사용할 때는 return 키워드 필요
};

// IIFE: Immediately Invoked Function Expression
(function hello() {
  console.log("IIFE");
})(); //함수를 괄호로 감싸고, 바로 실행
