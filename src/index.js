import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Second from './Second';
import App2 from './App2';
// 类组件 高阶组件
import Zi from './Zi';
// 自定义hooks
import Han from './Han';
// useReducer
import Reducer from './Reducer';
// useMemo useCallback
import Mc from './Mc';
// useRef
import Refss from './useRef'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Second />
    <App2 />
    {/* <Zi />  高阶组件写渲染+reduce性能优化*/}  
    <Han />
    <Reducer />
    <Refss />
    <Mc />
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
