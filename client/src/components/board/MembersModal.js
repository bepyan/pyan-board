import Modal from "../Modal.js";

const MembersModal = ({members}) => {
    
    /* render */
    const renderMembers = () =>{
        return Object.keys(members).map(key => `<div class="member f-r">
            <p> ${key} </p>
            <p> ${members[key]} </p>
        </div>`).join('');
    }
    const innerHTML = `
        <p> team member </p>
        ${renderMembers()}
    `
    /* MAIN */
    const root = document.createElement('div');
    root.className = "members-wrapper";
    Modal(root, innerHTML, () => {

    })
    return root;
}

export default MembersModal;