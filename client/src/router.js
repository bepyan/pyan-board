import Board from "component/Board";
import Home from "component/Home";
import Login from "component/Login";
import { $ } from "util/util.js";

function load(id, root = $(".root")) {

    root.innerHTML = ``;
    
    switch(id){
        case 'login':
            root.appendChild(Login);
            break;
        case 'home':
            root.appendChild(Home);
            break;
        case 'board':
            root.appendChild(Board);
            break;
        default:
            root.innerHTML = id;
    }
}

export default load;