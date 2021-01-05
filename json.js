//JSON
//JavaScript Object Notation

// 1. Object to JSON
// stringify(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(["apple", "banana"]);
console.log(json);

const rabbit = {
  name: "tori",
  color: "white",
  size: null,
  birthDate: new Date(),
  jump: () => {
    console.log(`${name} can jump!`);
  },
};

json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ["name"]); //이름만 넘기기
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === "name" ? "ellie" : value;
});
console.log(json);
// 2. JSON to Object
// parse(json)
console.clear();
json = JSON.stringify(rabbit); //json 은 jump라는 함수를 포함하지 않기 때문에, 이로부터 만든 obj또한 jump를 쓸 수 없다.
const obj = JSON.parse(json, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === "birthDate" ? new Date(value) : value;
}); // rabbit 의 birthDate 는 Date라는 객체, 이로부터 만들어진 json은 stirng. 이로부터 obj 만들면 string

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate());
