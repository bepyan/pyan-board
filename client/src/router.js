import Board from "./pages/Board.js";
import Home from "./pages/Home.js";
import Login from "./pages/Login.js";

import { $ } from "./libs/util.js";

function load(id, props={}) {

    // 조금 비효율적..
    window.sessionStorage.setItem('url', id);
    const root = $(".root");
    root.innerHTML = ``;
    
    switch(id){
        case 'login':
            root.appendChild(Login());
            break;
        case 'home':
            root.appendChild(Home());
            break;
        case 'board':
            root.appendChild(Board(props));
            break;
        default:
            root.innerHTML = id;
    }
}

export default load;