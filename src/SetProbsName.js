import React from "react";

//컴포넌트에게 전달되는 props는 파라미터를 통하여 조회 할 수 있습니다.
//props는 객체 형태로 전달되면 .을 통해 다양한 속성 값을 조회 할 수 있습니다.
//function MyHello(props){
    
//    return <div style={{color: props.color}}>안녕하세여{props.name}</div>
//}

function MyHello({color, name}){
    return <div style={{color}}>안녕하세여{name}</div>
}    

//props를 내바 값을 조회 할 때 마다 .을 통해 내부를 열어보눈대 비구조화 할당 문법을 사용하면
//더 간결하게 코드를 작성 할 수 있습니다.
export default MyHello;
