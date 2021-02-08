import makeModal from "../../libs/makeModal.js";

const InviteModal = () => {

    /* render */
    const innerHTML = `
        <p> invitation list </p>
    `
    /* MAIN */
    const root = document.createElement('div');
    root.className = 'invite-wrapper';
    makeModal(root, innerHTML, () => {

    })
    return root;
}

export default InviteModal;