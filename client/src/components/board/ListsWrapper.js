import {renderLists} from "../../libs/renderApi.js";
import { openModal } from "../../libs/util.js";
import ListAddModal from "./ListAddModal.js";
import NoteAddModal from "./NoteAddModal.js";

const ListsWrapper = ({board}) => {

    const initEventListener = () => {
        root.addEventListener('click', e => {
            const {className} = e.target;
            const [name, idx] = className.split(" ");
            switch(name){
                case 'add-list':
                    openModal('list-add-wrapper');
                    break;
                case 'add-note':
                    NoteAddModal({board, idx});
                    break;
                case 'edit-note':
                    break;
            }
        })
    }
    /* MAIN */
    const root = document.createElement('div');
    root.className = 'f w';
    root.innerHTML = `
        <div class="lists-wrapper"></div>
        <button class="add-list"> add list </button>
    `;
    renderLists(board.lists, root);
    root.appendChild(ListAddModal());
    initEventListener();
    return root;
}

export default ListsWrapper;