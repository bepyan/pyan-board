import api from "../../libs/api.js";
import Modal from "../../libs/Modal.js";
import { renderLists } from "../../libs/renderApi.js";
import { getStorage } from "../../libs/storage.js";
import { $, $$, $$$, isInVailInput, isSameArray, renderError } from "../../libs/util.js";

const NoteEditModal = ({board, listId, noteId}) => {
    
    /* util */
    const findNote = () => {
        let target;
        lists.find(lt => 
            target = lt.notes.find(item => item._id === noteId)
        );
        return target;
    }
    const getNoteByInput = () => {
        const text = $('.text', root).value;
        const members = $('.members', root).value.split(" ");
        members.pop();
        if(isInVailInput([text])){
            renderError(root);
            return null;
        }
        return {_id: noteId, text, members};
    }
    const close = () => {
        renderLists(lists);
        root.remove();
    }
    /* usecase event */
    const onAdd = () => {
        const newNote = getNoteByInput();
        api('post', '/notes', {boardId, listId, newNote}).then(res => {
            const {newNote} = res.data;
            list.notes.push(newNote);
            close();
        });
    }
    const onEdit = () => {
        const newNote = getNoteByInput();
        const {text, members} = list.notes.find(item => item._id === newNote._id);
        if(newNote.text === text && isSameArray(newNote.members, members)){
            renderError(root, '🧐 Noting change')
            return;
        }

        api('put', '/notes', {boardId, listId, newNote}).then(res => {
            const idx = list.notes.findIndex(item => item._id === newNote._id);
            list.notes[idx] = newNote;
            close();
        });
    }
    const onDelete = () => {
        const data = {boardId, listId, noteId};
        api('delete', '/notes', data).then(res => {
            const idx = list.notes.findIndex(item => item._id === noteId);
            list.notes.splice(idx, 1);
            close();
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
                case 'edit':
                    onEdit();
                    break;
                case 'delete':
                    onDelete();
                    break;
            }
        })
    }
    /* render  */
    const init = () => {
        const note = findNote(); 
        $('.text', root).value = note.text;
        const memberBts = $$$('.member', root);
        note.members.forEach(member =>
            memberBts.forEach(bt => {
                if(bt.id === member)  
                    onMember(bt);
            })
        );
    }
    const renderActionBt = () => {
        return isAdd ? `<button class="add"> add </button>` :
            `<button class="edit"> edit </button>
            <button class="delete"> delete </button>`
    }
    /* MAIN */
    const isAdd = noteId === undefined;
    const boardId = getStorage('boardId');
    const {lists, members} = board;
    const list = isAdd ? lists.find(item => item._id === listId)
        : lists.find(item => item.notes.find(item => item._id === noteId));
    if(!listId)
        listId = list._id;

    const root = document.createElement('div');
    const innerHTML = `
        <h4> 🙋🏻 ${list.name} </h4>
        <input class="text">
        <div class="f mb"> 
            ${members.map(item => `
                <button class="member" id="${item.id}">${item.id}</button>
            `).join('')}
        </div>  
        <input class="members" readonly placeholder="members">
        <div class="bt-wrapper">
            ${renderActionBt()}
            <button class="close"> close </button>
        </div>
        <p class="error"> &nbsp </p>
    `
    Modal(root, innerHTML, () => {
        initEventListener();
        if(!isAdd)
            init();
    });
    return root;
}
export default NoteEditModal;