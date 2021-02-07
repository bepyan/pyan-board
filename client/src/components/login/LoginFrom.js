import load from "../../router.js";
import { $, isInVailInput } from "../../libs/util.js";

const LoginFrom = () => {
    /* usecase event */
    const onLogin = () => {
        const id = $('.id', root).value;
        const pw = $('.pw', root).value;
        if(isInVailInput([id, pw])){
            $('.error', root).innerHTML = '😢 Invaild Input'
            return;
        }

        // 로그인 api

        // 성공하면 load('home')
        if(id === 'test' && pw === 'asdf')
            load('home');
    }

    /* evnet listener*/
    const initEventListener = () => {
        root.addEventListener('submit', e => {
            e.preventDefault();
            onLogin();
        })
        $('.signup-bt', root).addEventListener('click', e => {
            $('.signup-wrapper').classList.remove('hidden');
        })
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