"use strict";
// Objects
// One of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object
// object = { key : value };

// 1.Literal and properties
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const ellie = { name: "ellie", age: "4" };
print(ellie);

ellie.hasJob = true;
console.log(ellie.hasJob);

delete ellie.hasJob;

// 2. Computed properties
// key should be always string
console.log(ellie.name);
console.log(ellie["name"]); //동적으로 key 받아올 때 주로 사용하는 형식
ellie["hasJob"] = true;
console.log(ellie.hasJob);

function printValue(obj, key) {
  console.log(obj[key]);
  //console.log(obj.key);라고 하면 obj에 key라는 property없어서 undefined
}
printValue(ellie, "name");
printValue(ellie, "age");

// 3. Propery value shorthand
const person1 = { name: "bob", age: 2 };
const person2 = { name: "steve", age: 3 };
const person3 = { name: "dave", age: 4 };
const person4 = new Person("ellie", 30);
console.log(person4);

// 4. Constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// 5. in operator: property existence check (key in obj)
console.log("name" in ellie);
console.log("age" in ellie);
console.log("random" in ellie);
console.log(ellie.random); //undefined

// 6. for ..in vs for..of
// for (key in obj)
console.clear();
for (key in ellie) {
  console.log(key);
}

// for (value of iterable) //배열과 같은 것들에
const array = [1, 2, 4, 5];
for (value of array) {
  console.log(value);
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: "ellie", age: "20" };
const user2 = user;
user2.name = "coder";
console.log(user); // name: 'coder' 로 바뀜. user2와 user 레퍼런스가 가리키는 객체는같기때문

// old way
const user3 = {};
for (key in user) {
  user3[key] = user[key];
}
console.clear();
console.log(user3);

const user4 = Object.assign({}, user);
console.log(user4);

//another example
const fruit1 = { color: "red" };
const fruit2 = { color: "blue", size: "big" };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color); //blue 왜냐면 맨 오른쪽 값이 제일 세
console.log(mixed.size); //big
