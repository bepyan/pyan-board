import ip from "./ip.js";
import { popFail } from "./util.js";

const axiosUtil = (ax, func) => {
    ax.then(res => {
        func(res);
    })
    .catch(err => {
        console.log(err)
        popFail('axios');
    });
}
const api = (mathod, route, data, func) => {
    const url = ip + route;
    switch(mathod){
        case 'get':
            const params = data;
            return axiosUtil(axios.get(url, {params}), func);
        case 'post':
            return axiosUtil(axios.post(url, data), func);
        case 'put':
            return axiosUtil(axios.put(url, data), func);
        case 'delete':
            return axiosUtil(axios.delete(url, {data}), func);
        default:
            console.err(mathod);
    }
}

export default api;