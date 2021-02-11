import api from "../libs/api.js";
import Modal from "../libs/Modal.js";

const MyInviteModal = async() => {

    
    /* render */
    const renderHTML = () => `
        <p> my invite </p>
        ${invites.map((item) => {`<div class="f">
            <p> ${item.name} <p>
            <p> ${item.description}<p>
        <div>`}).join('')}
    `
    /* MAIN */  
    const root = document.createElement('div');
    root.className = 'my-invite-wrapper';
    
    const {data: {invites}} = await api('get', '/users/invaite');
    Modal(root, renderHTML(), () => {
        
    });
}

export default MyInviteModal;