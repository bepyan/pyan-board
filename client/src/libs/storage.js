import { isJsonString } from "./util.js";

const setStorage = (name, item) => {
    let target = item;
    if(typeof target === "object")
        target = JSON.stringify(item);
    window.sessionStorage.setItem(name, target);
}

const getStorage = (name) => {
    let item = window.sessionStorage.getItem(name);
    if(isJsonString(item))
        item = JSON.parse(item);
    return item;
}

const removeStorage = (name) => {
    window.sessionStorage.removeItem(name);
}

export {setStorage, getStorage, removeStorage}