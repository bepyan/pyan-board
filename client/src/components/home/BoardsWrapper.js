import { $, $$$ } from "../../libs/util.js";
import load from "../../router.js";
import BoardEdit from "./BoardEdit.js";

const BoardsWrapper = ({boards}) => {

    const initEventListener = () => {
        $$$('.board', root).forEach((item) => {
            item.addEventListener('click', e => {
                const {className} = e.target;

                const board = boards.find(e => e.key === item.id)
                board['id'] = item.id;
                switch(className){
                    case 'name':
                        load('board', {board})
                        break;
                    case 'edit':
                        root.appendChild(BoardEdit({board}));
                        break;
                    default:
                }
            })
        })
    }

    /* render */
    const renderBoardThums = () => boards.map(item => {
        return `<div class="board f-r" id="${item.key}">
            <div class="f-c">
                <div class="f-r">
                    <p class="name"> ${item.name} </p>
                    <p class="state"> ${item.state} </p>
                </div>
                <p class="time"> ${new Date().getTime() - item.lastUpdate} </p>
            </div>
            <p style="flex: 1.5"> ${item.description} </p>
            <div class="bt-wrapper f-r">
                <button class="edit"> edit </button>
            </div>
        </div>`
    }).join('');

    /* MAIN */
    const root = document.createElement('div');
    root.className = 'boards-wrapper f-c';
    root.innerHTML = `
        <div class="setting bt-wrapper">
            <button> add board </button>
            <button> sort </button>
        </div>
        ${renderBoardThums()} 
    `
    initEventListener();
    return root;
}

export default BoardsWrapper;