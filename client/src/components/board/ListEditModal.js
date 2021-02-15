import api from "../../libs/api.js";
import makeModal from "../../libs/makeModal.js";
import Modal from "../../libs/Modal.js";
import { renderLists } from "../../libs/renderApi.js";
import { getStorage } from "../../libs/storage.js";
import { $, closeModal, isInVailInput, renderError } from "../../libs/util.js";
import load from "../../router.js";

const ListEditModal = ({board, listId}) => {
    
    /* util */
    const close = () => {
        renderLists(lists);
        root.remove();
    }

    /* usecase event */
    const onAdd = () => {
        const boardId = getStorage('boardId');
        const name = $('.name', root).value;
        if(isInVailInput([name])){
            renderError(root);
            return;
        }
        api('post', '/lists', {boardId, name}).then(res => {
            const {success, err, newList} = res.data;
            if(!success){
                renderError(root, `😱 ${err}`);
                return;
            }
            lists.push(newList);
            close();
        })
    }

    const onEdit = () => {
        const name = $('.name', root).value;
        if(isInVailInput([name]) || name === list.name){
            renderError(root);
            return;
        }
        api('put', '/lists', {boardId, listId, name}).then(res => {
            const {success, err, newList} = res.data;
            if(!success){
                renderError(root, `😱 ${err}`);
                return;
            }
            const list = board.lists.find(item => item._id === listId);
            list.name = name;
            close();
        })
    }

    const onDelete = () => {
        api('delete', '/lists', {boardId, listId}).then(res => {
            const {success, err} = res.data;
            if(!success){
                renderError(root, `😱 ${err}`);
                return;
            }
            const idx = lists.findIndex(item => item._id === listId);
            lists.splice(idx, 1);
            close();
        })
    }


    const initEventListener = () => {
        root.addEventListener('click', e => {
            switch(e.target.className){
                case 'add':
                    onAdd();
                    break;
                case 'edit':
                    onEdit();
                    break;
                case 'delete':
                    onDelete();
                    break;
            }
        })
    }

    const renderActionBt = () => isAdd ? `<button class="add"> add </button>` :
        `<button class="edit"> edit </button>
         <button class="delete"> delete </button>`

    /* MAIN */
    const isAdd = listId === undefined;
    const boardId = board._id;
    const {lists} = board;
    const list = isAdd ? null : lists.find(item => item._id === listId);

    const root = document.createElement('div');
    root.className = 'list-edit-wrapper';
    const innerHTML = `
        <div class='f-c'>
            <h4> ${isAdd ? 'ADD' : 'EDIT'} LIST </h4>
            <input class="name" placeholder="list name" value="${isAdd ? '' : list.name}" >
            <div class="bt-wrapper">
                ${renderActionBt()}
                <button class="close"> close </button>
            </div>
            <p class="error"> &nbsp </p>
        </div>
    `
    Modal(root, innerHTML, initEventListener)
    return root;
}

export default ListEditModal;