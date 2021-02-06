import Board from "./pages/Board.js";
import Home from "./pages/Home.js";
import Login from "./pages/Login.js";

import { $ } from "./libs/util.js";

function load(id, root = $(".root")) {

    root.innerHTML = ``;
    
    switch(id){
        case 'login':
            root.appendChild(Login());
            break;
        case 'home':
            root.appendChild(Home());
            break;
        case 'board':
            root.appendChild(Board());
            break;
        default:
            root.innerHTML = id;
    }
}

export default load;