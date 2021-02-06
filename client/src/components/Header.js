import { $ } from "../libs/util.js";

const Header = () => {

    /* event listener */
    const initEventListener = () => {

    }

    /* MAIN */
    const root = document.createElement('div');
    root.className = 'header f-r';
    root.innerHTML = `
        <p> user name </p>
        <button> logout </button>
    `
    initEventListener();
    return root;
}

export default Header;