// useState
/**
 *  记忆单元格：(状态数组)
 *  1. 初次渲染：建立单元格，初始化state
 *  2. 每次调用useState，移动指针，下标加1
 *  3. 第二次渲染：找到对应下标，有初始化值，直接跳过擦桉树初始化
 * 
 * 
 *  1. 第二个参数引用是一致的
 *  2. object.is  是ES6语法，是一个浅拷贝 修复了NaN不等于NaN的问题
 *  3. 函数更新(上一次的state，更新的最新state) 和不同的返回值的更新； 是利用闭包 setState((count:上一次返回的count值)=>count+1)
 *  4. 渲染时， 多次setCount 是会合并为一次
 *  5. 类组件state 状态会合并，函数组件中useState中的state是不会合并对象的
 * 
 */

//  6.强制刷新
/**
 *  类组件：this.setState || this.forceUpdate 
 *  函数组件：const [,setCount]= useState({})   const onClick=params=>{setCount({})}
 * 
 */
// 7. 所有hooks 不能在if switch for 中使用
// 8. 只能在组件中 (自定义组件) 用hook
// 9. 所有的hook 必须要写道最开始的位置
// 10.惰性初始 state  const [count, setCount] = useState(()=>{  // 惰性初始化只运行一次
//    return 0;
//   }

import React,{useState} from 'react';

function App() {

  const [count, setCount] = useState(()=>{
    return 0;
  })

  const handleClick=()=>{
    setCount(count + 1)
  }
  return (
    <div className="App">
      <p>{ count }</p>
      <br />
      <button onClick={ handleClick }>Add</button>
    </div>
  );
}

export default App;
