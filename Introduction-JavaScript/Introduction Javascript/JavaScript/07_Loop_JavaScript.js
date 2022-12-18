//반복문
//for문은 가장 기본적인 반복문 입니다. 특정 조건동안 반복을 합니다.
for (let i = 0; i < 10; ++i) {
    console.log(i);
  }
  
  for (let i = 10; i > 0; --i) {
    console.log(i);
  }
  
  //배열과 반복문
  //배열의 크기를 활용하여 배열의 요소 하나하나를 꺼낼 수 있습니다.
  const array = [{ name: "멍멍이" }, { name: "야옹이" }, { name: "꽥꽥이" }];
  for (let i = 0; i < array.length; ++i) {
    console.log(array[i].name);
  }
  
  //객체 정보를 얻는 방법
  const doggy = {
    name: "멍멍이",
    age: 2,
    sound: "멍멍"
  };
  
  //Onject.entries : [키,값] 형태의 배열로 반환
  console.log(Object.entries(doggy));
  
  //Object.keys : [키,키,키] 형태의 배열 반환
  console.log(Object.keys(doggy));
  
  //Object.values :[값,값,값] 형태의 배열 반환
  console.log(Object.values(doggy));
  
  // for in 구문을 활용하여 각각의 키와 값을 반복 할 수도 있습니다.
  for (let key in doggy) {
    console.log(`${key}: ${doggy[key]}`);
  }
  
  //break와 countinue
  //반복문 안에서 break와 continue를 활용하여 반복문을 벗어나거나 그 다음 루프를 돌게합니다.
  //2면 2를 출력하지 않고 다음 루프를 돌며 5면 5까지 출력 후 루프를 끝냅니다.
  for (let i = 0; i < 10; ++i) {
    if (i === 2) continue;
    console.log(i);
    if (i == 5) break;
  }
  
  //숫자로 이루어진 배열이 주어졌을 때, 해당 숫자 배열안에 들어있는 숫자 중 3보다
  //큰 숫자로만 이루어진 배열을 새로 만들어서 반환해보세요.
  
  function biggerThanThree(numbers) {
    let array = [];
    for (let i = 0; i < numbers.length; ++i) {
      console.log(i);
      if (numbers[i] > 3) {
        console.log(numbers[i]);
        array.push(numbers[i]);
      }
    }
    return array;
  }
  
  const numbers_1 = [1, 2, 3, 4, 5, 6, 7];
  console.log(biggerThanThree(numbers_1)); // [4, 5, 6, 7]
  

  //배열 내장함수
//forEach : 콜백 방식으로 등록 후 사용합니다.
const numbers = [1, 2, 3, 4];

numbers.forEach((int) => {
  console.log(int);
});

//map : 배열안의 원소를 변환 할 때 사용 되며, 이 과정에서 새로운 배열이 만들어집니다.
//함수를 하나 선언 후 map의 파라메터로 넘겨줍니다.
const square = (n) => n * n;
const squared = numbers.map(square);
console.log(squared);

//indexOf : 몇번째인자인지 찾아줍니다.
const index = numbers.indexOf(2);
console.log(index);

//findIndex 특정 값이나 키값을 통해 몇번째 인자인지 찾습니다.
const todos = [
  {
    id: 1,
    text: "자바스크립트 입문",
    done: true
  },
  {
    id: 2,
    text: "함수 배우기",
    done: true
  },
  {
    id: 3,
    text: "객체와 배열 배우기",
    done: true
  },
  {
    id: 4,
    text: "배열 내장함수 배우기",
    done: false
  }
];

const find = todos.findIndex((to) => to.id === 3);
console.log(find);

//find  : findIndex와 같이 사용하지만 해당값 전체를 표기합니다.
const finded = todos.find((to) => to.id === 3);
console.log(finded);

//filter : 배열에서 특정 조건을 만족하는 값들만 따로 추출하여 새로운 배열을 만듭니다.
const tasksNotDone = todos.filter((todo) => todo.done === false);
console.log(tasksNotDone);

//splice : 배열내에서 특정항목을 제거할 때 찾습니다.
//몇번째 인덱스인 찾아 내서 사용합니다.
//인자로는 .splice(지울위치, 해당포함 몇개까지 지울지);
const indexing = todos.find((to) => to.id === 4);
console.log(indexing);
todos.splice(indexing, 1);

//slice : splice와 같이 사용하지만 기존 배열을 건드리지 않습니다.
const nums = [1, 2, 3, 4, 5, 6, 7, 8];
const sliced = nums.slice(0, 2);

console.log(nums);
console.log(sliced);

//shift와 pop
//shift는 첫번째 원소를 배열에서 추출합니다.
//pop은 맨 마지막 항목을 추출합니다.
let a = nums.shift();
let b = nums.pop();
console.log(a);
console.log(b);

//unshift : shift의 반대입니다. 배열의 맨 앞에 새 원소를 추가합니다.
nums.unshift(20);
console.log(nums);

//concat : 여러개의 배열을 하나로 합쳐줍니다.
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const merged = arr1.concat(arr2);
console.log(merged);

//join : 배열 안의 값들을 문자열 형태로 합쳐줍니다.
//파라메터 기본값은 , 이며 ''로 묶어 원하는 형태로 문자열로 만들 수 있습니다.
console.log(arr1.join()); //1,2,3,4
console.log(arr1.join(" ")); //1 2 3 4

//reduce : 두개의 파라미터를 전달합니다.
//누적된 연산을 저장할 첫번째인자
//현재 연산되어지는 두번째 인자
//현재 몇번쨰 인자인인 세번째 인자
//배열을 의미하는 네번쨰 인자입니다.
//let sum = nums.reduce();
console.log(numbers);

let sum = numbers.reduce((accumulator, current, index, array) => {
  if (index === array.length - 1) {
    //마지막 인자에서 최종 값
    return accumulator + current;
  }
  //마지막 인자가 아니면 accumulator에 계속 누적 후 return
  return accumulator + current;
}, 0); //0번째 인자부터 시작

console.log(sum);

//퀴즈
//숫자 배열이 주어졌을 때 10보다 큰 숫자의 갯수를 반환하는 함수를 만드세요.
//reduce를 사용해보자
function countBiggerThanTen(numbers) {
  let count = numbers.reduce((stack, current, index, array) => {
    if (index === array.length - 1) {
      return stack;
    }

    if (current > 10) {
      return (stack += 1);
    } else {
      return stack;
    }
  });

  return count;
}

const count = countBiggerThanTen([1, 2, 3, 5, 10, 20, 30, 40, 50, 60]);
console.log(count); // 5
