import makeModal from "../../libs/makeModal.js";

const MembersModal = ({members}) => {
    
    /* render */
    const renderMembers = () =>{
        return members.map(item => `<div class="member f-r">
            <p> ${item.id} </p>
            <p> ${item.auth} </p>
        </div>`).join('');
    }
    const innerHTML = `
        <h3> Team member </h3>
        ${renderMembers()}
    `
    /* MAIN */
    const root = document.createElement('div');
    root.className = "members-wrapper";
    makeModal(root, innerHTML, () => {

    })
    return root;
}

export default MembersModal;