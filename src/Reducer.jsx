import { useReducer} from 'react';


// state比较大，统一的方式更改state (调度) dispatch

// 行为：action;

// {
//     type: 'increment',  描述
//     payload: ''  参数
// }

// 归纳函数 统一管理(统一调度);
function reducer (state, action) {
    switch (action.type) {
        case 'increment':
          return {count: state.count + 1};
        case 'decrement':
          return {count: state.count - 1};
        default:
          throw new Error();
      }
}


// useReducers模拟useReducer实现
// function useReducers(reducer, initialCount) {
//      const [count, setCount] = useState(initialCount);
//      const dispatch = action => {
//         let newCount = reducer(count, action);

//         setCount(newCount)
//      }
    
//      return [count, dispatch]

// }
function Reducer () {
    // let [count, setCount] = useState(0)
    const [state, dispatch] = useReducer(reducer, {count: 0});
   
    return (
        <div>
            Count: {state.count}
            {/* <button onClick={()=> setCount(count - 1)}>-</button>
            <button onClick={()=> setCount(count + 1)}>+</button> */}
            <button onClick={()=> dispatch({type: 'increment'})}>+</button>
            <button onClick={()=> dispatch({type: 'decrement'})}>-</button>
        </div>
    )
}


export default Reducer;