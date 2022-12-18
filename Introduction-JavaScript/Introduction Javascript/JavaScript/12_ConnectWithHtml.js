//준비물 : index.html과 같은 페이지를 준비 합니다.
//h2와 button 태그에 id를 부여합니다.

//id를 설정하면 쉽게 해당 DOM을 선택하여 JS에서 컨트롤이 쉽습니다.
//DOM이란 : 각 태그에 대한 정보를 지니고 있는 JS 객체

//1.DOM 선택하기 : html src 경로에 연결해둬야한다.

const number = document.getElementById("number");
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");

console.log(number);
console.log(increase);
console.log(decrease);

//https://developer.mozilla.org/en-US/docs/Web/API/Element
//위의 링크를 통해 각각 DOM에 내장되어 있는 요소를 참고 할 수 있다.

console.log(number.innerText); //해당 DOM의 내용
console.log(increase.offsetTop); //top의 위치
console.log(decrease.id); //id 값

//이벤트 설정하기
//버튼 DOM에 onclick에 함수를 할당하여
//호출하면 발생해야하는 함수를 선언해줍니다.
//DOM의 이벤트 종류는 아래의 링크에서 구경 가능합니다.
//https://developer.mozilla.org/ko/docs/Web/Events
increase.onclick = () => {
  console.log("increase 클릭");
};

decrease.onclick = () => {
  console.log("decrease 클릭");
};

//버튼이 클릭될 때 숫자의 값을 변형해보자
//parseInt는 문자를 숫자로 변형해주는 함수이며
//10은 10진수로 숫자를 받아온다는 뜻입니다.
increase.onclick = () => {
  const current = parseInt(number.innerText, 10);
  number.innerText = current + 1;
};

decrease.onclick = () => {
  const current = parseInt(number.innerText, 10);
  number.innerText = current - 1;
};
