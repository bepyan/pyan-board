import makeModal from "../libs/makeModal.js";

const MyInviteModal = () => {

    /* render */
    const innerHTML = `
        <p> my invite </p>
    `
    /* MAIN */
    const root = document.createElement('div');
    root.className = 'my-invite-wrapper';
    makeModal(root, innerHTML, () => {

    });
    return root;
}

export default MyInviteModal;