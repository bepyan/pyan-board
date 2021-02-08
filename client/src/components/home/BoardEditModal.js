import { $, $$$, popSuccess, renderToggle } from "../../libs/util.js";
import load from "../../router.js";
import Modal from "../Modal.js";

const BoardEditModal = ({board}) => {

    /* usecase event */
    const onToggle = (state) => {
        board.state = state;
        renderToggle(root, state);
    }
    const onEdit = () => {
        board.boardName = $('.name', root).value;
        board.description = $('.description', root).value;
        // api edit board

        root.remove();
        load('home');
    }
    const onDelete = () => {
        const res = prompt('🥺 Do you really want to delete this board?\n type "yes" to delete');
        if(res === 'yes'){
            root.remove();
            popSuccess('delete');
        }
    }

    /* evnet listener*/
    const initEventListener = () => {
        root.addEventListener('click', e => {
            switch(e.target.className){
                case 'close': case 'modal-overlay':
                    root.remove();
                    break;
                case 'private':
                    onToggle('private');
                    break;
                case 'public':
                    onToggle('public');
                    break;
                case 'edit':
                    onEdit();
                    break;
                case 'delete':
                    onDelete();
                    break;
                default:
            }
        })
    }
    
    /* render */
    const innerHTML = `
        <div class="f-c">
            
            <input class="name" value="${board.name}" placeholder="board name">
            <div class="state bt-wrapper">
                <button class="private"> private </button>
                <button class="public"> public </button>
            </div>
            <textarea class="description">${board.description}</textarea>
            
            <div class="bt-wrapper">
                <button class="edit"> edit </button>
                <button class="delete"> delete </button>
                <button class="close"> close </button>
            </div>
            <p class="error"> &nbsp </p>
        </div>
    `

    /* MAIN */
    const root = document.createElement('div');
    root.className = 'board-edit-wrapper';
    Modal(root, innerHTML, () => {
        renderToggle(root, board.state);
        initEventListener();
    });
    root.classList.remove('hidden');
    return root;
}

export default BoardEditModal;