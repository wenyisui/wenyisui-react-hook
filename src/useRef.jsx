// 类组件：ref 原生dom, 子组件

const { Component, createRef, forwardRef, useRef, useImperativeHandle } = require("react");



// class Foo extends Component {
//     inputRef = createRef();

//     focus = () =>{
//         this.inputRef.current.focus();
//     }
//     render () {
//         return <input type="text" ref={this.inputRef} />
//     }
// }

const Foo = forwardRef((params, inputRef1) =>{ // 场景在ref转发的时候，我们需要暴露指定的对象或场景
    const inputRef = useRef();
    const focus = () =>{
        inputRef.current.focus();
    }
    
    useImperativeHandle(inputRef1, ()=>{
        return {
            focus
        }
    })
    return <input type="text" ref={inputRef} />
}) 


// class App extends Component {
//     inputRef = createRef();
    
//     onClick = () =>{
//       console.log(this.inputRef.current)
//       this.inputRef.current.focus();
//     }

//     render () {
//         return (
//             <div>
//                 {/* <input type="text" ref={this.inputRef} /> */}
//                 <Foo ref={this.inputRef}  />
//                 <button onClick={this.onClick}>点击聚焦</button>
//             </div>
//         )
//     }
// }

// useRef比createRef快  返回的ref对象在组件的整个生命周期内保持不变
const App = (params) => {
    // const inputRef = createRef();
    const inputRef = useRef();
    const onClick = () => {
    //    console.log(inputRef.current.focus())
       inputRef.current.focus();

    //    inputRef.current.parentNode.removeChild(inputRef.current);  //  useImperativeHandle 
    }

    return (
        <div>
            <Foo ref={inputRef} />
            <button onClick={onClick}>点击聚焦</button>
        </div>
    )
}

export default App;