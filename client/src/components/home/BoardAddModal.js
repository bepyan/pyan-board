import { $, $$$, isInVailInput, popSuccess, renderError, renderToggle } from "../../libs/util.js";
import load from "../../router.js";
import makeModal from "../../libs/makeModal.js";
import api from "../../libs/api.js";

const BoardAddModal = () => {

    /* usecase event */
    const addBoard = () => {

        const name = $('.name', root).value;
        const state = $('.toggle', root).innerHTML.trim();
        const description = $('.description', root).value;
        if(isInVailInput([name, state])){
            renderError(root);
            return;
        }
        api('post', '/boards/add', {name, state, description}).then(() => {
            popSuccess('add board');
            load('home');
        });
    }

    /* evnet listener*/
    const initEventListener = () => {
        root.addEventListener('click', e => {
            switch(e.target.className){
                case 'private':
                    renderToggle(root, 'private');
                    break;
                case 'public':
                    renderToggle(root, 'public');
                    break;
                case 'add':
                    addBoard();
                    break;
                default:
            }
        })
    }
    
    /* render */
    const innerHTML = `
        <div class="f-c">
            
            <input class="name" placeholder="board name">
            <div class="bt-wrapper">
                <button class="private"> private </button>
                <button class="public"> public </button>
            </div>
            <textarea class="description"></textarea>
            
            <div class="bt-wrapper">
                <button class="add"> add </button>
                <button class="close"> close </button>
            </div>
            <p class="error"> &nbsp </p>
        </div>
    `

    /* MAIN */
    const root = document.createElement('div');
    root.className = 'board-add-wrapper';
    makeModal(root, innerHTML, () => {
        renderToggle(root, 'private');
        initEventListener();
    })
    return root;
}

export default BoardAddModal;