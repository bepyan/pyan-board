import ip from "./ip.js";
import { popFail } from "./util.js";

const axiosUtil = (ax) => {
    return ax.catch(err => {
        console.log(err)
        popFail('axios');
    });
}
const api = (mathod, route, data={}) => {
    const url = ip + route;
    switch(mathod){
        case 'get':
            const params = data;
            return axiosUtil(axios.get(url, {params}));
        case 'post':
            return axiosUtil(axios.post(url, data));
        case 'put':
            return axiosUtil(axios.put(url, data));
        case 'delete':
            return axiosUtil(axios.delete(url, {data}));
        default:
            console.err(mathod);
    }
}

export default api;