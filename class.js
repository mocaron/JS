"use strict";
// Objecte-oriented programming
// class: template
// object: instance of a class
// JavaScript classes
// - introduced in ES6
// - syntatical sugar over prototype-based inheritance

// 1. Class declarations
class Person {
  //constructor
  constructor(name, age) {
    //fields
    this.name = name;
    this.age = age;
  }

  //methods
  speak() {
    console.log(`${this.name}: hello!`);
  }
}

const ellie = new Person("ellie", 20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();

// 2. Getter and Setters
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age; //get 과 set을 정의하는 순간, this.age 는 get을 호출,
  }

  get age() {
    return this._age;
  }

  set age(value) {
    //   if (value < 0) {
    //    throw Error("age cannot be negative");
    // }
    this._age = value < 0 ? 0 : value; //this.age가 아닌 변수를 다른 이름으로 this._age로
  }
}

const user1 = new User("Steve", "Job", -1);
console.log(user1.age);

// 3. Fields ( public, private )
// Too soon !
class Experiment {
  publicField = 2;
  #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

// 4. Static properties and methods
// Too soon!
class Article {
  static publisher = "Dream Coding";
  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }

  static printPublisher() {
    console.log(Article.publisher);
  }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher); //class 자체에 설정되어있는 정적변수
Article.printPublisher(); //class 자체의 정적 메소드

// 5. Inheritance
// a way for one class to extends another class
class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing ${this.color} color of `);
  }

  getArea() {
    return this.width * this.height;
  }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
  draw() {
    super.draw(); //부모의  draw 함수 호출
    console.log("▲");
  }
  getArea() {
    return (this.width * this.height) / 2;
  }

  toString() {
    return `Triangle:  color: ${this.color};`;
  }
}
const rectangle = new Rectangle(20, 20, "blue");
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, "red");
triangle.draw();
console.log(triangle.getArea());

// 6. Class checking: instanceof
console.log(rectangle instanceof Rectangle); //true
console.log(triangle instanceof Rectangle); //false
console.log(triangle instanceof Object); //true 모든 객체는 Object class 상속

console.log(triangle.toString()); //override 된 toString 호출
