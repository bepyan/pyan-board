import { $, popFail, popSuccess, renderError, renderToggle } from "../../libs/util.js";
import load from "../../router.js";
import Modal from "../../libs/Modal.js";
import api from "../../libs/api.js";
import { renderBoardsThum } from "../../libs/renderApi.js";

const BoardEditModal = ({boards, boardId}) => {

    const close = () => {
        root.remove();
        renderBoardsThum(boards, false);
    }
    /* usecase event */
    const onToggle = (state) => {
        board.state = state;
        renderToggle(root, state);
    }
    const onEdit = () => {
        board.name = $('.name', root).value;
        board.description = $('.description', root).value;

        api('put', '/boards', {board}).then(res => {
            close();
        })
    }
    const onDelete = () => {
        const res = prompt('🥺 Do you really want to delete this board?\n type "yes" to delete');
        if(res === 'yes'){
            api('delete', '/boards', {boardId}).then(res => {
                const {err} = res.data;
                if(err){
                    renderError(err);
                    return;
                }
                const idx = boards.findIndex(item => item._id === boardId);
                boards[idx].splice(idx, 1);
                close();
            })
        }
    }

    /* evnet listener*/
    const initEventListener = () => {
        root.addEventListener('click', e => {
            switch(e.target.className){
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
    const renderInnerHTML = () => `
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
    const board = boards.find(item => item._id === boardId);

    const root = document.createElement('div');
    root.className = 'board-edit-wrapper';
    Modal(root, renderInnerHTML(), () => {
        renderToggle(root, board.state);
        initEventListener();
    })
}

export default BoardEditModal;