
// 副作用：纯函数：1. 引用外部变量；2. 调用外部函数
//  相同的输入对应相同的输出

import { useEffect, useState } from "react";

//  1. 修改dom; 2. 修改全局变量 3. ajax  4. 计时器  5. 存储相关
//  和外部变量的交互；


// 1. 每一次副作用函数都是不同的函数
// 存在清理函数
// 1. render + useEffect 
// -> render + 清理函数 + useEffect
// -> render + 清理函数 + useEffect

// 清理函数钻进销毁的时候也会执行

// 让他只在初次渲染(didMout)执行：didUpdate执行

// useEffect第二个参数
// 1. 指定当前的effect 函数所需要的依赖项
// 2. 依赖是[]，在初次渲染 和 卸载的时候执行
// 3. 有依赖项，并且依赖项不一致的时候 会重新执行


// 自定义hook;

const useCount = () =>{
    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = `You clicked ${count} times`;
        console.log("title")
    })

    return [count, setCount];
}



function Foo () {

    const [count, setCount] = useCount();
    // const [count, setCount] = useState(0);

    // console.log("render")

    const handleClick=()=>{
        setCount(count + 1)
    }
   
    // useEffect(()=>{
    //     console.log("开启计时器")
    //     let timer = setInterval(() => {
    //         console.log("进入计时器")
    //         // 通过箭头函数传参的方式，拿到最新的count setCount(count =>count + 1)   
    //         // 使用依赖项的方式会每次重新开启计时器
    //         setCount(count =>count + 1)
    //     }, 1000);
        
    //     // console.log('useEffect')
    //     return ()=>{
    //         // console.log("clear Effect")
    //         console.log("清除计时器")
    //         clearInterval(timer);
    //     }
    // }, [])

    return (
        <div>
            <div>{ count }</div>
            <button onClick={ handleClick }>Add</button>
        </div>
    )
}

function Second () {
   
   const [visible, setVisible] = useState(true);
   return (
      <div>
        {visible && <Foo />}
        <button onClick={()=> setVisible(!visible)}>显示/隐藏</button>
      </div>
   )
}


export default Second;