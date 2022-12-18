//Hooks를 사용하여 함수형 컴포넌트도 상태를 관리해보자
//동적인 값 끼얹기 useState
import React,{useState} from "react";


//이벤트 설정
//리액트에서 엘리번트 이벤트를 설정해줄떄에는 on이벤트이름={실행하고싶은함수} 형태로 절정해줘야합니다.
//useState를 사용할 때 첫번째 원소는 현재 상태, 두 번쨰 원소는 Setter 함수입니다.
//setNumbeer함수는 파라미러토 전달 받은 값으르 최신 상태로 설정해줍니다.
function Counter()
{
    const [number, setNumbeer] = useState(0);
    const onIcrease = () =>{
        setNumbeer(prevNumber => prevNumber+1);
    }

    const onDecrease = () =>{
        setNumbeer(prevNumber => prevNumber-1);
    }

    return(
        <div>
            <h1>{number}</h1>
            <button onClick={onIcrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    );
}

export default Counter;