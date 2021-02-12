import Header from "../components/Header.js";
import ListsWrapper from "../components/board/ListsWrapper.js";
import BoardManager from "../components/board/BoardManager.js";
import { getStorage } from "../libs/storage.js";
import api from "../libs/api.js";

const Board = async() => {
    const boardId = getStorage('boardId');
    const {data: {board}} = await api('get', '/boards/board', {boardId});
    /* MAIN */
    const root = document.createElement('div');
    root.className = 'f-c';
    root.appendChild(Header());
    root.appendChild(await BoardManager({board}));
    root.appendChild(ListsWrapper({board}));

    return root;
}

export default Board;