import api from "../../libs/api.js";
import Modal from "../../libs/Modal.js";
import { renderLists } from "../../libs/renderApi.js";
import { getStorage } from "../../libs/storage.js";
import { $, isInVailInput, renderError } from "../../libs/util.js";

const NoteAddModal = ({board, idx}) => {
    /* usecase event */
    const onAdd = async() => {
        const note = $('.note', root).value;
        const members = $('.members', root).value.split(" ");
        members.pop();
        if(isInVailInput([note])){
            renderError(root);
            return;
        }
        const boardId = getStorage('boardId');
        const newNote = {note, members};
        api('post', '/boards/note', {boardId, listIdx: idx, newNote}).then(res => {
            list.notes.push(newNote)
            renderLists(lists);
            root.remove();
        });
    }
    const onMember = (target) => {
        const {classList, id} = target;
        const $input = $('.members', root);
        if(classList.contains('toggle')){
            classList.remove('toggle');
            const arr = $input.value.split(" ");
            $input.value = arr.filter(item => item !== id).join('');
        }
        else{
            classList.add('toggle');
            $input.value += `${id} `
        }
    }
    /* init event listen */
    const initEventListener = () => {
        root.addEventListener('click', e => {
            const [name] = e.target.className.split(" ");
            switch(name){
                case 'member':
                    onMember(e.target);
                    break;
                case 'add':
                    onAdd();
                    break;
            }
        })
    }
    /* MAIN */
    const {lists, members} = board;
    const list = lists[parseInt(idx)];

    const root = document.createElement('div');
    const innerHTML = `
        <h4> 🙋🏻 ${list.name} </h4>
        <input class="note">
        <div class="f mb"> 
            ${members.map(item => `
                <button class="member" id="${item.id}">${item.id}</button>
            `).join('')}
        </div>  
        <input class="members" readonly placeholder="members">
        <div class="bt-wrapper">
            <button class="add"> add </button>
            <button class="close"> close </button>
        </div>
        <p class="error"> &nbsp </p>
    `
    Modal(root, innerHTML, initEventListener);
    return root;
}
export default NoteAddModal;