//함수는 특정 코드를 하나의 기능으로 묶어 명령을 실행하게 해주는 기능입니다.
const a = 1;
const b = 2;
let c = a + b + 1;
console.log(c);

function add(a, b) {
  return a + b;
}

c = add(a, b);
console.log(c);

//함수를 만들 땐 function 키워드를 사용하며 매개변수는 따로 값을 설정하지 않습니다.
//또한, return 키워들르 사용하여 function타입에 상관없이 반환값도 줄 수 있습니다.
// retrun이 발생하면 이후 코드는 실행되지 않습니다.

function add_custom(a, b) {
  return a + b;
  console.log("실행 되지 않습니다.");
}
c = add_custom(a, b);
console.log(c);

//템플릿 리터럴로 문자열을 매개변수화 가능합니다.
//+연산을 하지 않아도 로그에 name부분에 name 매개변수 값이 들어갑니다.
function hello(name) {
  console.log('Hello, ${name}!');
}
hello('Who Ride Chicken');

//화살표 함수
//선언과 동시에 함수를 사용하는 문법입니다.

const add_custom2 = (a, b) => {
  return a + b;
};

console.log(add_custom2(1, 2));

//다음과 같이 줄여 쓸 수 도 있습니다.
const add_custom3 = (a, b) => a + b;
console.log(add_custom3(1, 2));

//다만 여러 줄로 구성 되는 함수는 {}로 묶어줘야합나다.
const grade = (score) => {
  switch (score) {
    case 100:
      console.log("100점");
      break;
    case 90:
      console.log("90점");
      break;
    case 80:
      console.log("80점");
      break;
    case 70:
      console.log("70점");
      break;
  }
};

console.log(grade(100));

//=>로 만든 함수와 funcion 함수의 차이점은 함수내에서
//this 키워드를 쓸 때 서로 가르키는 변수가 다릅니다 이후 자세히 다루겠습니다.