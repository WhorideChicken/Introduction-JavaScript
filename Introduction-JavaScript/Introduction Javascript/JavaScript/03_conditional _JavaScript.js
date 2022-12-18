//조건문은 특정 조건이 만족됐을 때 코드를 실행하도록 제어할 수 있습니다.
let a = 1;
if ((a += 1 === 2)) {
  console.log("a+1은 2 입니다.");
}

a = 0;
if ((a += 1 === 2)) {
  console.log("a+1은 2 입니다.");
} else {
  console.log("a+1은 2가 아닙니다.");
}

//else if를 활용하여 새로운 조건을 넣을 수도 있습니다.
a = 10;
if (a === 5) {
  console.log("5입니다.");
} else if (a === 10) {
  console.log("10입니다.");
} else {
  console.log("5도 아니고 10도 아닙니다.");
}

a = 7;
if (a === 5) {
  console.log("5입니다.");
} else if (a === 10) {
  console.log("10입니다.");
} else {
  console.log("5도 아니고 10도 아닙니다.");
}


//switch case문을 통해 특정 값에 따라 조건에 충족하는 코드를 실행싴ㅂ니다.
const divice = 'iPhone';

switch(divice)
{
  case 'iPhone':
    console.log('아이폰입니다.');
    break;
  case 'iPad':
    console.log('아이패드 입니다.')
    break;
}