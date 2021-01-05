// Q1. make a string out of an array
{
  const fruits = ["apple", "banana", "orange"];
  const result = fruits.join("and");
  console.log(result);
}

// Q2. make an array out of a string
{
  const fruits = "🍎, 🥝, 🍌, 🍒";
  const result = fruits.split(",", 2); //두개만 배열로
  console.log(result);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  const result = array.reverse();
  console.log(result); //리턴도 변환
  console.log(array); //원 배열 자체도 변화
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  const result = array.slice(2, 5); //splice는 원본자체를 자름
  console.log(result); //slice는 잘린 배열을 리턴
  console.log(array);
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student("A", 29, true, 45),
  new Student("B", 28, false, 80),
  new Student("C", 30, true, 90),
  new Student("D", 40, false, 66),
  new Student("E", 18, true, 88),
];

// Q5. find a student with the score 90
{
  const result = students.find(
    (student) =>
      //콜백함수 정의 (arrow function 형식으로)
      student.score === 90 //점수가 90인 Student 객체 반환
  );
  console.log(result);
}

// Q6. make an array of enrolled students
{
  const result = students.filter((student) => student.enrolled === true);
  console.log(result); //콜백함수로 배열 반환
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  const result = students.map((student) => student.score); //모든 요소를 콜백합수로 가공된 값들로 대체된 배열 반환
  console.log(result);
}

// Q8. check if there is a student with the score lower than 50
{
  console.clear();
  const result = students.some((student) => student.score < 50); //boolean return
  console.log(result); //true

  const result2 = students.every((student) => student.socre < 50); //모든게 충족해야 true
  console.log(result2); //false
}

// Q9. compute students' average score
{
  const result = students.reduce((prev, curr) => prev + curr.score, 0); //reduce는 값을 누적
  //prev : 다음 실행의 초기값
  // curr : 배열의 한 item
  // 두번째 인자 0은 prev의 초기값
  console.log(result / students.length);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  const result = students
    .map((student) => student.score)
    .filter((score) => score >= 50)
    .join();
  console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  const result = students
    .map((student) => student.score)
    .sort((a, b) => a - b) //a-b가 지금 -니까 작은거 우선 정렬
    .join();
  console.log(result);
}
