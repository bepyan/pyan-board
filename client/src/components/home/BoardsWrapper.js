import { $, $$$, getPassTime, openModal } from "../../libs/util.js";
import load from "../../router.js";
import BoardEditModal from "./BoardEditModal.js";
import BoardAddModal from "./BoardAddModal.js";
import Modal from "../../libs/Modal.js";

const BoardsWrapper = ({boards}) => {

    const initEventListener = () => {
        root.addEventListener('click', e => {
            switch(e.target.className){
                case 'add-bt':
                    openModal('board-add-wrapper');
                    break;
                case 'sort-bt':
                    break;
                default:
            }
        })

        $$$('.board', root).forEach((item) => {
            item.addEventListener('click', e => {
                const {className} = e.target;

                const board = boards.find(ele => ele._id === item.id);
                switch(className){
                    case 'name':
                        load('board', {id: board._id})
                        break;
                    case 'edit-bt':
                        BoardEditModal({board});
                        break;
                    default:
                }
            })
        })
    }

    /* render */
    const renderBoardThums = () => boards.map(item => {
        return `<div class="board f-r" id="${item._id}">
            <div class="f-c">
                <div class="f">
                    <p class="name"> ${item.name} </p>
                    <p class="state"> ${item.state} </p>
                </div>
                <p class="time"> ${getPassTime(item.lastUpdate)} </p>
            </div>
            <p style="flex: 1.5"> ${item.description} </p>
            <div class="bt-wrapper f-r">
                <button class="edit-bt"> edit </button>
            </div>
        </div>`
    }).join('');

    /* MAIN */
    const root = document.createElement('div');
    root.className = 'boards-wrapper f-c';
    root.innerHTML = `
        <div class="setting bt-wrapper">
            <button class="add-bt"> add board </button>
            <button class="sort-bt"> sort </button>
        </div>
        ${renderBoardThums()} 
    `
    root.appendChild(BoardAddModal());
    initEventListener();
    return root;
}

export default BoardsWrapper;