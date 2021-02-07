import Modal from "./Modal.js";

const MyInviteModal = () => {

    /* render */
    const innerHTML = `
        <p> my invite </p>
    `
    /* MAIN */
    const root = document.createElement('div');
    root.className = 'my-invite-wrapper';
    Modal(root, innerHTML, () => {

    });
    return root;
}

export default MyInviteModal;