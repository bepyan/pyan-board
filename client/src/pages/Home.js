import Header from "../components/Header.js";
import BoardSearch from "../components/home/BoardSearch.js";
import BoardsWrapper from "../components/home/BoardsWrapper.js";
import api from "../libs/api.js";

const Home = async() => {

    const getBoards = async() => {
        const {data} = await api('get', '/boards');
        return data.boards;
    }
    const boards = await getBoards();

    /* MAIN */

    const root = document.createElement('div');
    root.className = 'home-warpper f-c'
    root.appendChild(Header());
    root.appendChild(BoardSearch());
    root.appendChild(BoardsWrapper({boards}));

    return root;
}

export default Home;