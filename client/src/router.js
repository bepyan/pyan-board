import Board from "./pages/Board.js";
import Home from "./pages/Home.js";
import Login from "./pages/Login.js";

import { $, popFail } from "./libs/util.js";
import { getStorage, setStorage } from "./libs/storage.js";

const load = async (url) => {

    if(url)
        setStorage('url', url);
    // 조금 비효율적..
    if(getStorage('user') && url === null)
        url = 'home';
    setStorage('url', url);
    
    const root = $(".root");
    root.innerHTML = ``;
    
    switch(url){
        case 'login':
            root.appendChild(await Login());
            break;
        case 'home':
            root.appendChild(await Home());
            break;
        case 'board':
            if(!getStorage('boardId')){
                popFail('Load board', 'ERROR with sessionStorage');
                return;
            }
            root.appendChild(await Board());
            break;
        default:
            root.innerHTML = url;
    }
}

export default load;