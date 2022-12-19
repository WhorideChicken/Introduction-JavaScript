import React, {useRef, useState} from "react";

//여러개의 uusestate를 사용할 떈 문자열이 아닌 객체형태로 상태를 관리해줍니다.
//useRef로 특정 DOM 선택하기
//getElemnetById, quertSelector와 같이 js에서 특정 DOM을 선택했습니다.
//리액트에서도 특정 ㅇ레리먼트 크기, 스크롤바의 위치 등등 혹은 포커스를 주기 등
//다양하게 DOM을 선택하기 위해서 리액트에선 ref라는것을 사용합니다.
//ref는 useRef라는 Hook함수를 사용합니다.
//아래에는 useRef를 사용하여 초기화를 눌렀을 때 이름 input에 포커스가 잡히도록 구현해보겠습니다.
function InputServal()
{
    const [inputs, setInputs] = useState({
        name: '',
        nickname:''
    });

    const nameInput = useRef();

    const {name, nickname } = inputs;//비구조화 할당을 통해 값 추출

    const onChange = (e) => {
        const {value, name} = e.target;
        setInputs({
                ...inputs, //기존의 input 객체를 복사
                [name]: value //bane키를 가진 값을 value로 설정 
            });
    };

    const onReset = () =>{
        setInputs(
            {
                name:'',
                nickname:''
            }
        );
        nameInput.current.focus();
    };

    return(
        <div>
            <input 
            name="name" 
            placeholder="이름" 
            onChange={onChange} 
            value={name}
            ref={nameInput}//nameInput에 ref로 name 해당 Input을 할당
            />
            <input name="nickname"placeholder="닉네임" onChange={onChange} value={nickname}/>
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값 : </b>
                이름(닉네임)
            </div>
        </div>
    );
}

export default InputServal;