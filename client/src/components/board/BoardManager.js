import { $ } from "../../libs/util.js";
import load from "../../router.js";
import InviteModal from "./InviteModal.js";
import MembersModal from "./MembersModal.js";


const BoardManager = ({board}) => {

    /* render */
    
    const initEventListener = () => {
        root.addEventListener('click', e => {
            switch(e.target.className){
                case 'back':
                    load('home');
                    break;
                case 'invite':
                    $('.invite-wrapper').classList.remove('hidden');
                    break;
                case 'members':
                    $('.members-wrapper').classList.remove('hidden');
                    break;
                default:
            }
        })
    }

    /* MAIN */
    const root = document.createElement('div');
    root.className = 'board-manager-wrapper f-c';
    root.innerHTML = `
        <button class="back"> back </button>
        <div class="manager-wrapper">
            <p> ${board.name} </p>
            <p> ${board.state} </p>
            <div class="bts-wrapper">
                <button class="invite"> Invite </button>
                <button class="members"> members </button>
            </div>
        </div>
    `
    root.appendChild(InviteModal());
    root.appendChild(MembersModal({members: board.members}));

    initEventListener();
    return root;
}

export default BoardManager;