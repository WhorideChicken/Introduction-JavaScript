/* = : 대입 연산자는 할당을 하는 연산입니다.*/
let value = 1;
value = 2;

/* + : 덧셈 연산을 합니다.*/
/* - : 뺄셈 연산을 합니다.*/
/* * : 곱셈 연산을 합니다.*/
/* / : 나눗셈 연산을 합니다.*/

let a = 1 + 2;
console.log(a);

let b = 1 + 2 - (3 * 4) / 4;
console.log(b);

/* ++, -- 증감 연산자입니다.*/
/* ++, -- 가 뒤에 오면 증감이 되기 전의 값을 보여주고.
앞에 오면 증감이 된 값을 바로 보여줍니다.*/

let c = 1;
console.log(c++);
console.log(++c);

/* +=, -= 증감 연산자입니다.*/
/*사직 연산과 =를 합치면 코드의 길이를 줄일 수 있습니다. */
let d = 1;
d += 3;
d -= 3;
d *= 3;
d /= 3;
console.log(d);

/*논리 연산자 !, &&, || */
/* ! 연산자는  Boolean 값을 반대로 바꿔줍니다*/
/* && 연산자는 두 값이 true이어야 true를 반환합니다.*/
/* || 연산자는 두 값 중 하나만 true여도 true를 반환합니다.
둘 다 fasle면 false입니다.*/
/*연산의 순서는 ! -> && -> || 순서입니다.*/

const f = !true;
console.log(f);

const g = true && true;
console.log(g);

const h = true && false;
console.log(h);

const i = true || false;
console.log(i);

/* ==과 === 의 차이
===는 타입까지 검사하여 일치한지 비교를 하지만
==는 타입을 검사하지 않와 1과 '1'이 같다고 판단합니다.*/
const j = 1;
const k = 1;
const equal = j === k;
console.log(equal);

const l = "1";
const m = 1;

const equal1 = l == m;
const equal2 = l === m;

console.log(equal1);
console.log(equal2);

/* ==를 사용하면 0과 fale도 같은 값으로 간주 되며
undefined와 null도 같은 값으로 간주됩니다. 때문에 == 보다는 ===을 선호합니다.*/

/*두 값 일치 비교 또한 마찬가지입니다. !=은 타입을 검사하지 않고
!== 는 타입을 검사하기 때문에 !== 사용을 권장합니다. */

//<, >를 활용하여 크고 작음도 비교가 가능합니다.
const O = 10;
const P = 15;

console.log(O < P);
console.log(O <= P);
console.log(O > P);
console.log(O >= P);

//문자열 붙이기 +연산으로 string끼리 문자열을 합칠 수도 있습니다.
const Q = "Hello";
const R = "JvaSCript";
console.log(Q + R);
