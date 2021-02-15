import { $, $$$, findParent, getPassTime, openModal, popSuccess } from "../../libs/util.js";
import load from "../../router.js";
import BoardEditModal from "./BoardEditModal.js";
import BoardAddModal from "./BoardAddModal.js";
import { setStorage } from "../../libs/storage.js";
import { renderBoardsThum } from "../../libs/renderApi.js";
import api from "../../libs/api.js";
const BoardsWrapper = ({boards}) => {

    const onJoin = () => {
        popSuccess('🤩 JUST WAIT FOR OWNER ACEPT')
    }
    const onMyBoard = async() => {
        const {data: {boards: newBoards}} = await api('get', '/boards');
        renderBoardsThum(newBoards, false);
    }

    const initEventListener = () => {
        root.addEventListener('click', e => {
            root.parentElement
            const {className, parentElement} = e.target;
            switch(className){
                case 'my-board-bt':
                    onMyBoard();
                    break;
                case 'add-bt':
                    openModal('board-add-wrapper');
                    break;
                case 'sort-bt':
                    break;
                case 'name':
                    const {id}  = findParent('board', e.target);
                    setStorage('boardId', id);
                    load('board');
                    break;
                case 'edit':
                    const {id: boardId}  = findParent('board', e.target);
                    BoardEditModal({boards, boardId});
                    break;
                case 'join':
                    onJoin();
                    break;
            }
        })
    }
    /* MAIN */
    const root = document.createElement('div');
    root.className = 'boards-wrapper f-c';
    root.innerHTML = `
        <div class="setting bt-wrapper">
            <button class="my-board-bt"> my board </button>
            <button class="add-bt"> add board </button>
            <button class="sort-bt"> sort </button>
        </div>
        <div class="boards-thum-wrapper"></div>
    `
    renderBoardsThum(boards, false, root);

    root.appendChild(BoardAddModal());
    initEventListener();
    return root;
}

export default BoardsWrapper;