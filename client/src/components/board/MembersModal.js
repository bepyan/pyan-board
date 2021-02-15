import makeModal from "../../libs/makeModal.js";
import { getStorage } from "../../libs/storage.js";

const MembersModal = ({members}) => {

    /* util */
    const table  = {
        "owner": 0,     0: "owner",
        "edit": 1,      1: 'edit',
        "read": 2,      2: 'read',
        "invite": 3,    3: 'invite',
        "request": 4,    4: 'request'
    }
    const userId = getStorage('user').id;
    const isOwner = members.some(item => item.id === userId && item.auth === 'owner');
    /* usecae event */

    const initEventListener = () => {

    }

    /* render */
    const renderMembers = () =>
        members.sort((a,b) => 
            table[a.auth] - table[b.auth]
        ).map(item => {
            return `
                <div class="member ${item.auth} f-r">
                    <p> ${item.id} </p>
                    <p> ${item.auth} </p>
                    ${isOwner && item.auth !== 'owner' ? '<button> edit </button>' : '<div> </div>'}
                </div>
            `
        }).join('');
    const renderInnerHTML = () => `
        <h4> 💻 Team member </h4>
        ${renderMembers()}
    `

    /* MAIN */
    const root = document.createElement('div');
    root.className = "members-wrapper";
    makeModal(root, renderInnerHTML(), initEventListener);
    return root;
}

export default MembersModal;