import { $, $$$, findParent, getPassTime, openModal, popSuccess } from "../../libs/util.js";
import load from "../../router.js";
import BoardEditModal from "./BoardEditModal.js";
import BoardAddModal from "./BoardAddModal.js";
import { setStorage } from "../../libs/storage.js";
import { renderBoardsThum } from "../../libs/renderApi.js";
import api from "../../libs/api.js";
import Modal from "../../libs/Modal.js";
const BoardsWrapper = ({boards}) => {

    const onJoin = ({boardId}) => {
        api('post', '/boards/join', {boardId}).then(res => {
            
            Modal(document.createElement('div'), '🤩 JUST WAIT FOR OWNER ACEPT 🤩')
        })
    }
    const onMyBoard = async() => {
        const {data: {boards: newBoards}} = await api('get', '/boards');
        renderBoardsThum(newBoards, root);
    }

    const getBoardId = (e) => {
        const board = findParent('board', e.target);
        if(!board)
            return;
        return board.id;
    }
    const initEventListener = () => {
        root.addEventListener('click', e => {
            const boardId  = getBoardId(e);
            switch(e.target.className){
                case 'my-board-bt':
                    onMyBoard();
                    break;
                case 'add-bt':
                    openModal('board-add-wrapper');
                    break;
                case 'sort-bt':
                    break;
                case 'name':
                    setStorage('boardId', boardId);
                    load('board');
                    break;
                case 'edit':
                    BoardEditModal({boards, boardId});
                    break;
                case 'join':
                    onJoin({boardId});
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
    renderBoardsThum(boards, root);

    root.appendChild(BoardAddModal());
    initEventListener();
    return root;
}

export default BoardsWrapper;