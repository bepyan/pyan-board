import api from "./libs/api.js";
import { getStorage, setStorage } from "./libs/storage.js";
import load from "./router.js"

// `SameSite` attribute..
document.cookie = 'cross-site-cookie=bar; SameSite=None; Secure';

// axios는 session ID를 매번 바꾼다..
axios.defaults.withCredentials = true;

api('get', '/users', {}, (res) => {
    const {logined, user, sessionId} = res.data;
    console.log(`😇 your session ID : \n ${sessionId}`);
    if(user)
        setStorage('user', user);
    const url = getStorage('url');
    load(logined ? url : 'login');
});