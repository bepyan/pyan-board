import { $ } from "./util.js";

/* Modal version 2 */
const Modal = (root, HTML, func=()=>{}) => {

    root.classList.add('modal');
    root.innerHTML = `
        <div class="modal-overlay"> </div>
        <div class="modal-content f-c"> 
            ${HTML}
        </div>
    `
    /* event listener */
    const $close = $('.close', root);
    const $modalOverlay = $('.modal-overlay', root);

    $modalOverlay.addEventListener('click', e => root.outerHTML = ``);
    if($close)
        $close.addEventListener('click', e => root.outerHTML = ``);

    func();
    $('.root').appendChild(root);
}

export default Modal;