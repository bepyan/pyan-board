import { $, $$, isInVailInput, popSuccess, renderError } from "../../libs/util.js";
import makeModal from "../../libs/makeModal.js";
import api from "../../libs/api.js";
import load from "../../router.js";

const Signup = () => {
    // TO DO
    // add reset button

    /* usecase event */
    const onSignup= () => {
        const id = $('.id', root).value;
        const pw = $('.pw', root).value;
        const name = $('.name', root).value;
        if(isInVailInput([id, pw, name])){
            renderError(root);
            return;
        }
        // 회원가입 api
        api('post', '/users/signup', {id, pw, name}, (res) => {
            const {success, err} = res.data;
            if(!success){
                renderError(root, err);
                return;
            }
            popSuccess('sign-in');
            load('home');
        })
        // 성공하면 load('login')
    }

    /* evnet listener*/
    const initEventListener = () => {
        root.addEventListener('submit', e => {
            e.preventDefault();
            onSignup();
        })
    }
    
    /* render */
    const innerHtml = `<form class="signup-form f-c">
        <input class="id" placeholder="ID">
        <input class="pw" type="password" placeholder="pw">
        <input class="name" placeholder="name">
        <div class="bt-wrapper">
            <button type="submit"> sign in </button>
            <button type="button" class="close"> close </button>
        </div>
        <p class="error"> &nbsp </p>
    </form>`

    /* MAIN */
    const root = document.createElement('div');
    root.className = 'signup-wrapper';
    makeModal(root, innerHtml, () => {
        initEventListener();
    });

    return root;
}

export default Signup;