import api from "../libs/api.js";
import { getStorage, removeStorage } from "../libs/storage.js";
import { $, openModal } from "../libs/util.js";
import load from "../router.js";
import MyInviteModal from "./MyInviteModal.js";

const Header = () => {
    /* usecase event */
    const onLogout = () => {
        api('get', '/users/logout').then(() => {
            removeStorage('user');
            removeStorage('boardId');
            load('login');
        });
    }

    /* event listener */
    const initEventListener = () => {
        root.addEventListener('click', e => {
            switch(e.target.className){
                case 'logout':
                    onLogout();
                    break;
                case 'myInvite':
                    MyInviteModal();  
                    break;
                default:
                    console.log(e.target.className)
            }
        })
    }

    /* MAIN */
    const user = getStorage('user');
    
    const root = document.createElement('div');
    root.className = 'header f';
    root.innerHTML = `
        <p class="user-id"> ${user.id} </p>
        <p class="user-name"> ${user.name} </p>
        <button class="logout"> logout </button>
        <button class="myInvite"> my invite </button>
    `

    initEventListener();    
    return root;
}

export default Header;