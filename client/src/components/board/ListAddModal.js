import api from "../../libs/api.js";
import makeModal from "../../libs/makeModal.js";
import { getStorage } from "../../libs/storage.js";
import { $, isInVailInput, renderError } from "../../libs/util.js";
import load from "../../router.js";

const ListAddModal = () => {
    
    const addList = () => {
        const boardId = getStorage('boardId');
        const name = $('.name', root).value;
        if(isInVailInput([name])){
            renderError(root);
            return;
        }
        api('post', '/boards/list', {boardId, name}).then(res => {
            const {success} = res.data;
            if(!success){
                renderError(root, '😱 Server ERR');
                return;
            }
            load('board');
        })
    }


    const root = document.createElement('div');
    root.className = 'list-add-wrapper';
    const innerHTML = `
        <div class='f-c'>
            <h4> ADD LIST </h4>
            <input class="name" placeholder="list name">
            <div class="bt-wrapper">
                <button class="add"> add </button>
                <button class="close"> close </button>
            </div>
            <p class="error"> &nbsp </p>
        </div>
    `
    makeModal(root, innerHTML, () => {
        $('.add', root).addEventListener('click', addList);
    })
    return root;
}

export default ListAddModal;