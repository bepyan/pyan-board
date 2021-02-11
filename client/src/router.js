import Board from "./pages/Board.js";
import Home from "./pages/Home.js";
import Login from "./pages/Login.js";

import { $ } from "./libs/util.js";

const load = async (id, props={}) => {

    // 조금 비효율적..
    window.sessionStorage.setItem('url', id);
    const root = $(".root");
    root.innerHTML = ``;
    
    switch(id){
        case 'login':
            root.appendChild(await Login());
            break;
        case 'home':
            root.appendChild(await Home());
            break;
        case 'board':
            root.appendChild(await Board(props));
            break;
        default:
            root.innerHTML = id;
    }
}

export default load;