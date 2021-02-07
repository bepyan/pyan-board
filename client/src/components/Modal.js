import { $ } from "../libs/util.js"

const Modal = (root, HTML, func) => {

    root.classList.add('modal');
    root.classList.add('hidden');
    root.innerHTML = `
        <div class="modal-overlay"> </div>
        <div class="modal-content"> 
            ${HTML}
        </div>
    `
    /* event listener */
    const $close = $('.close', root);
    const $modalOverlay = $('.modal-overlay', root);

    $modalOverlay.addEventListener('click', e => root.classList.add('hidden'));
    if($close)
        $close.addEventListener('click', e => root.classList.add('hidden'));

    func();
}

export default Modal;