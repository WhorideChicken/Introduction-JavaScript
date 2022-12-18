import React from 'react';
import Hello from './Hello';
import MyHello from './SetProbsName';
import Wrapper from './Wrapper';
import Counter from './Counter';
import './App.css'

//컴포넌트는 일정의 UI 조각입니다. 쉽게 재사용도 가능합니다.

function App() {
  const name = 'react';
  const style ={
    backgroundColor: 'black',
    color : 'aqua',
    fontSize : 24,
    padding: '1rem'// 다른 단위 사용 시 문자열로 설정
  }

  return (
    <>
      <Hello />
      <Hello />
      <Hello />
      <Hello />
      <Hello />
      <Hello />
      <Hello />
      <Hello />
      <div style = {style}>{name}</div>
      <div className="gray-box"></div>
      {/*주석 노출 X*/}
      /*주석 노출*/
      <Hello
      //주석 노출 X
       />
      
      
      <MyHello name="react" color="red"/>
      <MyHello name="new react" color="blue"/>
      <Hello color="pink"></Hello>

      {/*컴포넌트 태스 사이에 넣은 값을 조회하고 싶을 땐, props.chidren을 조회하면 됩니다. */}
      {/*내부를 보여주려면 props.chidren을 렌더링 해주어야합니다. */}
      {/*isSpercial이라는 값으로 특정 조건에 따라 다른 결과물을 렌더링 하게 할 수 있습니다. */}
      <Wrapper>
        <Hello name = "react2" color="red" isSpecial={true}/>
      </Wrapper>

      <Counter />

    </>
  );
}

export default App;
