import { $, $$, isInVailInput } from "../libs/util.js";

const Signup = () => {

    /* usecase event */
    const onSignup= () => {
        const id = $('.id', root).value;
        const pw = $('.pw', root).value;
        const name = $('.name', root).value;
        if(isInVailInput([id, pw, name])){
            $('.error', root).innerHTML = `😢 Invaild Input`;
            return;
        }
        // 회원가입 api

        // 성공하면 load('login')
    }

    /* evnet listener*/
    const initEventListener = () => {
        root.addEventListener('click', e => {
            switch(e.target.className){
                case 'close': case 'modal-overlay':
                    root.classList.add('hidden');
                    break;
                default:
            }
        })

        root.addEventListener('submit', e => {
            e.preventDefault();
            onSignup();
        })

    }
    
    /* render */
    const renderRoot = () =>  `
        <div class="modal-overlay"> </div>
        <div class="modal-content f-c">
            <form class="signup-form f-c">
                <input class="id" placeholder="ID">
                <input class="pw" type="password" placeholder="pw">
                <input class="name" placeholder="name">
                <div class="bt-warper">
                    <button type="submit"> sign in </button>
                    <button class="close"> close </button>
                </div>
                <p class="error"> &nbsp </p>
            </form>
        </div>
    `

    /* MAIN */
    const root = document.createElement('div');
    root.className = 'modal hidden';
    root.innerHTML = renderRoot();
    initEventListener();
    return root;
}

export default Signup;