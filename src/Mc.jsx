import { useState, useCallback, useMemo } from 'react';



// const Foo1 = memo(props => {   // memo是优化子组件的一种方式  传入参数不变时子组件不更新
//     return (
//         <div>
//             {props.count}
//             <ul>{props.render()}</ul>
//         </div>
//     )
// })
const Foo = props => {
    console.log('Foo render')
    return (
        <div>
            {props.count}
            <ul>{props.render()}</ul>
        </div>
    )
}

function Mc() {

    const [range, setRange] = useState({ min: 0, max: 10000 });
    const [count, setCount] = useState(0);

    const render = useCallback(params => {
        let list = [];
        console.log('render');
        for (var i = 0; i < range.max; i++) {
            list.push(<li key={i}>{i}</li>)
        }

        return list;
    },[range])    // 依赖项为空，这个函数一直不会变

    // const render = useMemo(params => {   // useMemo是固定值的
    //     let list = [];
    //     console.log('render');
    //     for (var i = 0; i < range.max; i++) {
    //         list.push(<li key={i}>{i}</li>)
    //     }

    //     return list;
    // },[range]) 
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={()=>setCount(count + 1)}>add</button>
            <Foo render={render}></Foo>
        </div>
    )
}


export default Mc;