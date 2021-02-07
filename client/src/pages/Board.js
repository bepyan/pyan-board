import Header from "../components/Header.js";
import ListsWrapper from "../components/board/ListsWrapper.js";
import BoardManager from "../components/board/BoardManager.js";

const Board = ({id, board}) => {
    
    /* MAIN */
    const root = document.createElement('div');
    root.className = 'f-c';
    root.appendChild(Header());
    root.appendChild(BoardManager({board}));
    root.appendChild(ListsWrapper({lists: board.lists}));

    return root;
}

export default Board;