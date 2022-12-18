//삼항 연산자
// ? : 키워드를 사용합니다.
// 조건 ? A : B
// 조건이 참이면 A를 return 거짓이면 B를 return 합니다.

const testnum = 15;
let comment = testnum > 10 ? "10보다 큽니다" : "10보다 작습니다.";
console.log(comment);

//Truthy and Falsy
//Truthy : true 계열의 성분
//Falsy가 아닌 모든 성분
//Falsy : false 계열의 성분
//undefined, null, 0, '', NaN

//조건물을 활용하여 잘못된 값이 들어왔을 때를 대비하자
console.log(true && "hello"); // hello
console.log(false && "hello"); // false
console.log("hello" && "bye"); // bye
console.log(null && "hello"); // null
console.log(undefined && "hello"); // undefined
console.log("" && "hello"); // ''
console.log(0 && "hello"); // 0
console.log(1 && "hello"); // hello
console.log(1 && 1); // 1

//함수의 기본 파라미터
//함수 파라미터에 인자를 넣지 않을 경우 기본 값이 들어가도록 설정합니다.
function testCalculate(value = 1) {
  return value * value;
}

//비구조화 할당시에도 기본값을 설정할 수 있습니다
const object = { a: 1 };

function print({ a, b = 2 }) {
  console.log(a);
  console.log(b);
}

print(object);

//spread와 rest
//spread : 객체 혹은 배열을 펼칠 수 있습니다.
//키워드 ...
const slime = {
  name: "슬라임"
};

const cuteSlime = {
  name: "슬라임",
  attribute: "cute"
};

const purpleCuteSlime = {
  name: "슬라임",
  attribute: "cute",
  color: "purple"
};

//spread 방식
const slime2 = {
  name: "슬라임"
};

const cuteSlime2 = {
  ...slime2,
  attribute: "cute"
};

const purpleCuteSlime2 = {
  ...cuteSlime2,
  color: "purple"
};

//기존의 slime2와  cuteSlime2을 건드리지 않으면서 해당 값을 가져와
//내용을 모두 집어넣고 나만의 값을 추가합니다.
//배열에서도 가용이 가능합니다.
const animals = [1, 2, 3, 4, 5];
const addAnimals = [...animals, 8, 9, 10];
console.log(addAnimals);

//rest의 생김새는 spread와 비슷한데 역할이 매우 다릅니다.
//rest는 객체, 배열, 파라미터에서만 사용이 가능합니다.
//purpleCuteSlimed에서 color를 뺸값을 restcuteSlime로 받아옵니다.
const { color, ...restcuteSlime } = purpleCuteSlime;
console.log(color);
console.log(restcuteSlime);

//rest 활용방법
//함수의 인자 갯수가 몇개가 될 지 모르는 상황에서
function sum(...rest) {
  return rest;
}
let result = sum(1, 2, 3, 4, 5);
console.log(result);

result = sum(5, 6, 7, 8, 9, 10, 100, 10);
console.log(result);

//sum(5, 6, 7, 8, 9, 10, 100, 10);부분과 같이 모두 넣어줄 떈
//spread를 활요하면 좋습니다.
const nums = [1, 2, 3, 4, 5, 6, 7, 8];
result = sum(...nums);
console.log(result);

//퀴즈
//함수에 n 개의 숫자들이 파라미터로 주어졌을 때, 그 중 가장 큰 값을 알아내세요.

//const result_max = max(1, 2, 3, 4, 10, 5, 6, 7);
//console.log(result_max);
//reduce를 활용해보자
function max(...rest) {
  let maxnum = 0;
  for (let i = 0; i < rest.length - 1; ++i) {
    if (rest[i] > maxnum) {
      maxnum = rest[i];
    }
  }
  return maxnum;
}
const result_max = max(1, 2, 3, 4, 10, 5, 6, 7);
console.log(result_max);

function max2(...rest) {
  let a = rest.reduce((accumulator, current) => {
    return (accumulator = accumulator > current ? accumulator : current);
  });

  return a;
}
const result_max2 = max2(1, 2, 3, 4, 10, 5, 6, 7);
console.log(result_max2);

//Scope의 이해
//Global : 전역
//Funtion : 함수내
//Block : if for switch와 같이 특정 블록 내부에서만 사용

//Hoisting 이해하기
//Hoisting이란 자바 스크립트에서 아직 선언되지 않은 함수/변수를 끌어올ㄹ려서
//사용 할 수 있는 자바스크립트
//아래와 같은 방식은 자제하는것이 좋습니다.
myFunction();

function myFunction() {
  console.log('hello world!');
}