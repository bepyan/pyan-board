import Modal from "../Modal.js";

const InviteModal = () => {

    /* render */
    const innerHTML = `
        <p> invitation list </p>
    `
    /* MAIN */
    const root = document.createElement('div');
    root.className = 'invite-wrapper';
    Modal(root, innerHTML, () => {

    })
    return root;
}

export default InviteModal;