/*console.log -> log를 찍는 기능입니다.*/
console.log("Hello JavaScript");

/*덧셈 기능도 바로 출력이 가능합니다.*/
console.log(1 + 2);

/*변수 선언, value라는 변수에 1이라는 값을 할당*/
let value = 1;
console.log(value);

value = 2;
console.log(value);

/*상수, 한번 선언하고 값이 바뀌지 않는 값을 의미*/
/*a 선언 이후 a = 2와 같이 할당하면 오류가 발생합니다. */
const a = 1;
console.log(value);

/*var 키워드*/
/*모던 자바 스크립트에서는 더 이상 사용하지 않습니다.
IE9 or IE10에서는 let과 const를 사용 할 수 없어 var를 사용 할 수도 있다.
*/

/*Number 그냥 바로 값을 대입하면 된다.*/
let Testvalue = 1;

/*string 또한 작은 따옴표 혹은 큰 따옴표로 감싸서 선언하면 된다.*/
/*작은 따옴표를 많이들 선호합니다. */
let text = "hello";

/*Boolean 또한 let형 변수에 true, false를 할당하여 사용합니다.*/
let isTrue = true;
let isFalse = false;

/*null과 undefined : 없음을 의미하는 데이터 타입*/
/*null : 값이 없을을 선언 할 때 사용*/
const member = null;

/*undefined 변수를 선언 후 아무 값도 할당하지 않은 상태에서 사용하려 할 때*/
let people;
console.log(people);

/*null과 Undefined는 둘 다 값이 없음을 의미 하지만 null은 값이 없다고
고의적으로 값을 설정을 하는 것이도 undefined는 설정하지 않았기 때문이라는 차이가 있습니다.*/
