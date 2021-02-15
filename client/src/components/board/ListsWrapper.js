import {renderLists} from "../../libs/renderApi.js";
import { $$$, openModal } from "../../libs/util.js";
import ListEditModal from "./ListEditModal.js";
import NoteEditModal from "./NoteEditModal.js";

const ListsWrapper = ({board}) => {



    const initEventListener = () => {
        root.addEventListener('click', e => {
            const {className, parentElement} = e.target;
            const id = parentElement.id;
            switch(className){
                case 'add-list':
                    ListEditModal({board});
                    break;
                case 'edit-list':
                    ListEditModal({board, listId: id});
                    break;
                case 'add-note':
                    NoteEditModal({board, listId: id});
                    break;
                case 'edit-note':
                    NoteEditModal({board, noteId: id})
                    break;
            }
        })
    }
    /* MAIN */
    const {lists} = board;
    const root = document.createElement('div');
    root.className = 'f w';
    root.innerHTML = `
        <div class="lists-wrapper"></div>
        <button class="add-list"> add list </button>
    `;
    renderLists(lists, root);
    initEventListener();

    $$$('.notes-wrapper', root).forEach(item => {
        new Sortable(item, {
            animation : 350
        });
    })

    return root;
}

export default ListsWrapper;