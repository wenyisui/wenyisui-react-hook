// 自定义hooks
import { useState, useEffect } from "react";
function useInfo () {
    const [info, setInfo] = useState([]);
    useEffect(() => {
        (async () => {
            let res = await fetch(
                "http://jsonplaceholder.typicode.com/users"
            ).then(res => res.json())

            setInfo(res)
        })();
    }, [])
    
    return info
}

export {useInfo}