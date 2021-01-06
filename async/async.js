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


//2. await ✨
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(2000);
  return '🍎';
}

async function getBanana() {
  await delay(1000);
  return '🍌';
}

//function pickFruits() {
  //return getApple().then(apple => {
    //return getBanana().then(banana => `${apple} + ${banana}`)
  //});
//}

/* async를 사용하여 편리하게. 총 2초 소요
async function pickFruits() {
  const apple = await getApple();
  const banana = await getBanana();
  return `${apple} + ${banana}`;
}*/

/*1초만에 만들 수는 없을까? => Promise 생성과 동시에 수행되는 점을 이용
async function pickFruits() {
  const applePromise = getApple();
  const bananaPromise = getBanana();
  const apple = await applePromise;
  const banana = await bananaPromise;
  return `${apple} + ${banana}`;
}*/

// useful APIs ✨
function pickAllFruits() {
  return Promise.all([getApple(), getBanana()]).then(fruits =>
    fruits.join(' + '));      //all은 promise들으 배열을 받아서 다 완료되면 배열로 반환
}

pickAllFruits().then(console.log);

function pickOnlyOne() {
  return Promise.race([getApple(),getBanana()]);
}

pickOnlyOne().then(console.log); //먼저 전달받은 프로미스 하나만 출력