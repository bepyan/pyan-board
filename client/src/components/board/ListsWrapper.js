import {renderLists} from "../../libs/renderApi.js";
import { openModal } from "../../libs/util.js";
import ListAddModal from "./ListAddModal.js";
import NoteEditModal from "./NoteEditModal.js";

const ListsWrapper = ({board}) => {

    const initEventListener = () => {
        root.addEventListener('click', e => {
            const {className, parentElement} = e.target;
            switch(className){
                case 'add-list':
                    openModal('list-add-wrapper');
                    break;
                case 'add-note':
                    const listId = parentElement.id;
                    NoteEditModal({board, listId});
                    break;
                case 'edit-note':
                    const noteId = parentElement.id;
                    NoteEditModal({board, noteId})
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