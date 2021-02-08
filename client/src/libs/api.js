import ip from "./ip";

const axiosUtil = (ax, func) => {
    ax.then(res => {
        func(res);
    }).catch(err => console.log(err));
}
const api = (mathod, route, data, func) => {
    switch(mathod){
        case 'get':
            const params = data;
            return axiosUtil(axios.get(ip+route, {params}), func);
        case 'post':
            return axiosUtil(axios.post(ip+route, data), func);
        case 'put':
            return axiosUtil(axios.put(ip+route, data), func);
        case 'delete':
            return axiosUtil(axios.delete(ip+route, {data}), func);
        default:
            console.err(mathod);
    }
}

export default api;