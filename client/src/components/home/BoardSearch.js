import api from "../../libs/api.js";
import { renderBoardsThum } from "../../libs/renderApi.js";
import { $ } from "../../libs/util.js";

const BoardSearch = () => {
    
    // tooltip hover

    // search result
    const onSearch = () => {
        const text = $('input', root).value;

        api('get', '/boards/search', {text}).then(res => {
            const {boards} = res.data;
            renderBoardsThum(boards, true);
        });
    }

    /* event listener */
    const initEventListener = () => {
        root.addEventListener('submit', e => {
            e.preventDefault();
            onSearch();
        })
        $('.random-board', root).addEventListener('click', e => {
            console.log('random')
        })
    }

    /* MAIN */
    const root = document.createElement('form');
    root.className = 'search-wapper';
    root.innerHTML = `
            <tooltip> ⚑ </tooltip>
            <input>
            <button type="submit"> search </button>
            <button class="random-board" type="button" style="width: 170px"> see random board </button>
    `
    initEventListener();
    return root;
}

export default BoardSearch;