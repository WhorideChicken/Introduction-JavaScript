//리액트 컴포넌트를 만들 때 아래와 같이 import해야합니다.
//리액트 컴포넌트에서는 XML형식의 값을 반환해줄 수 있는데 이를 JSX라고 부립니다.
import React from "react";
//isSpecial의 default 는 true입니다.
function Hello({color, name, isSpecial}){
    return(
        <div style={{color}}>
            {isSpecial ? <b>*</b> : null} 
            안녕하세요 {name}
        </div>
    )
}

//defalutProps로 기본값 설정
Hello.defaultProps ={
    name : '이름없음'
}


//해당 코드는 Hello라는 컴포넌트를 내보내겠다는 의미입니다.
//이처리를 하면 다른 컴포터는에서 호출이 가능합니다.
export default Hello;

