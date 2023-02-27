
import { useInfo } from "./service/hook";


const useList = (info, itemTip) => {
    return (
        <div>
            <ul dangerouslySetInnerHTML={{
                __html: info.map(item => itemTip(item))
            }}>

            </ul>
        </div>
    )
}

const Han = () => {

    // const [info, setInfo] = useState([]);
    // useEffect(() => {
    //     (async () => {
    //         let res = await fetch(
    //             "http://jsonplaceholder.typicode.com/users"
    //         ).then(res => res.json())

    //         setInfo(res)
    //     })();
    // }, [])

    const info = useInfo();

    function itemTip(item) {
        return Object.entries(item).reduce((prev, [key, value]) => {
            // if (typeof value === 'object') {
            //    return prev += `<ul><li>${key}: ${this.itemTpl(value)}</li></ul>`
            // } else {
            //    return prev += `<li>${key}: ${value}</li>`;
            // }

            return typeof value === "object"
                ? (prev += `<ul><li>${key}: ${itemTip(value)}</li></ul>`)
                : (prev += `<li>${key}: ${value}</li>`)
        }, '');
    }



    return useList(info, itemTip);
}

export default Han;