//html과 styless.css 를 준비 후
//Dom과 연결 작업을 시작합니다.
//css파일을 import합니다.

//id가 아닌 class로 DOM을 선택하고 싶을 땐
//1. document.getElementsByClassName
//2. document.querySelector

//1번과 2번을 사용합니다.
//2번을 사용할 땐 클래스이름 앞에 .을 붙입니다.
import "./styles.css";

const open = document.getElementById("open");
const close = document.getElementById("close");
const modal = document.querySelector(".modal-wrapper");

open.onclick = () => {
  modal.style.display = "flex";
};

close.onclick = () => {
  modal.style.display = "none";
};
