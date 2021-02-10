import load from "../../router.js";
import { $, isInVailInput, openModal, popFail, renderError } from "../../libs/util.js";
import api from "../../libs/api.js";
import { setStorage } from "../../libs/storage.js";

const LoginFrom = () => {
    /* usecase event */
    const onLogin = () => {
        const id = $('.id', root).value;
        const pw = $('.pw', root).value;
        if(isInVailInput([id, pw])){
            renderError(root);
            return;
        }
        // 로그인 api
        api('get', '/users/login', {id, pw}, (res) => {
            const {user, success, err} = res.data;
            if(!success){
                renderError(root, err);
                return;
            }
            setStorage('user', user);
            load('home');
        });
    }

    /* evnet listener*/
    const initEventListener = () => {
        root.addEventListener('submit', e => {
            e.preventDefault();
            onLogin();
        })
        $('.signup-bt', root).addEventListener('click', e => openModal("signup-wrapper"));
    }

    /* render */

    /* MAIN */
    const root = document.createElement('form');
    root.className = 'login-form';
    root.innerHTML = `
        <input class="id" placeholder="ID">
        <input class="pw" type="password" placeholder="pw">
        <button type="submit"> log in </button>
        <button type="button" class="signup-bt"> sign up </button> 
        <p class="error" style="margin-top: 1rem;"> </p>
    `
    initEventListener();
    return root;
}

export default LoginFrom;