import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


//여기서 ReactDom.render의 역할은 브라우저에 있는 실제 DOM 내부에 리액트 컴포넌트르 ㄹ렌더링하겠다는 것을
//의미합니다 id가 root인 DOM을 선택하고 있습니다.