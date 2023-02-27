import React,{useEffect, useState} from 'react';


// hooks 解决竞态的问题
const API = {
    async queryEmployById(id) {
        return new Promise(resolve =>{
            setTimeout(() => {
                resolve({id,currentDepartment: `currentDepartment: ${id}`})
            }, 2000 / (5 - id))
        })
    }
}

const Department = props =>{
    let { id } = props;
    let [employees, setEmployees] = useState({});

    useEffect(()=>{
        // 加状态，让他决定是否进行渲染
        let didCancel = false;
        (async function fetchDate() {
            let employess = await API.queryEmployById(id);

            if(!didCancel) {
                setEmployees(employess)
            }
            
        })();

        return () => {
            didCancel = true;
        }
    }, [id])

    return (
        <div>
            <p>{employees.currentDepartment}</p>
        </div>
    )
}

const App2 = params => {
    let [id, setId] = useState(1);
    return (
        <div>
            <div>id: {id}</div>
            <Department id={id}></Department>
            <button onClick={()=> setId(id + 1)}>增加id</button>
        </div>
    )
}

export default App2;