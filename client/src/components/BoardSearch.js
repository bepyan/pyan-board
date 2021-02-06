import { $ } from "../libs/util.js";

const BoardSearch = () => {
    
    // tooltip hover

    // search result -> modal

    /* event listener */
    const initEventListener = () => {
        root.addEventListener('submit', e => {
            e.preventDefault();
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