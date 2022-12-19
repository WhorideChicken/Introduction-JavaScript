import React, { useState } from "react";

//usestate를 사용하여 인풋 내용을 적용해보자
function InputSample(){
    const[text, setText] = useState('');

    const onChange = (e) =>{
        setText(e.target.value)
    }

    const onReset = () => {
        setText('');
    };


    return(
        <div>
            <input onChange={onChange} value={text}/>
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: {text}</b>
            </div>
        </div>
    );
}

export default InputSample;