"use strict";

//async & await;
//clear style of using promise :)

//1. async
async function fetchUser() {
  //do network request in 10 secs....
  return "ellie";
} //함수 안을 자동으로 Promise로 만들어줌

const user = fetchUser();
user.then(console.log);
console.log(user);
