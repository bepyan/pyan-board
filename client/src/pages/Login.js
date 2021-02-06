import Signup from "../components/Signup.js";
import { $, $$, isInVailInput } from "../libs/util.js";
import load from "../router.js";

const Login = () => {
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
        $('.login-form', root).addEventListener('submit', e => {
            e.preventDefault();
            console.log(e.target);
            onLogin();
        })
        $('.signup-bt', root).addEventListener('click', e => {
            $('.modal').classList.remove('hidden')
        })
    }

    /* render */
    const renderRoot = () =>  root.innerHTML = `
        <p class="title"> Login to pyan-board </p>
        <form class="login-form">
            <input class="id" placeholder="ID">
            <input class="pw" type="password" placeholder="pw">
            <button type="submit"> log in </button>
            <button type="button" class="signup-bt"> sign up </button> 
        </form>
        <p class="error" style="margin-top: 1rem;"> </p> 
    `

    /* MAIN */
    const root = document.createElement('div');
    root.className = 'login-warpper f-c';
    renderRoot();
    initEventListener();
    return root;
}

export default Login;