import { $ } from "../libs/util.js";
import load from "../router.js";
import MyInviteModal from "./MyInviteModal.js";

const Header = () => {

    /* event listener */
    const initEventListener = () => {
        console.log($('.logout', root))

        root.addEventListener('click', e => {
            switch(e.target.className){
                case 'logout':
                    console.log('asdf')
                    load('login');
                    break;
                case 'myInvite':
                    $('.my-invite-wrapper').classList.remove('hidden');
                    break;
                default:
                    console.log(e.target.className)
            }
        })
    }

    /* MAIN */
    const root = document.createElement('div');
    root.className = 'header f-r';
    root.innerHTML = `
        <p> user name </p>
        <button class="logout"> logout </button>
        <button class="myInvite"> my invite </button>
    `
    root.appendChild(MyInviteModal());

    initEventListener();    
    return root;
}

export default Header;