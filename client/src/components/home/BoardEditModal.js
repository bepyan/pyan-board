import Modal from "../Modal.js";

const BoardEditModal = ({board}) => {

    /* usecase event */
    

    /* evnet listener*/
    const initEventListener = () => {
        root.addEventListener('click', e => {
            switch(e.target.className){
                case 'close': case 'modal-overlay':
                    root.remove();
                    break;
                default:
            }
        })

        root.addEventListener('submit', e => {
            e.preventDefault();
        })

    }
    
    /* render */
    const innerHTML = `
        <div class="f-c">
            
            <input class="board-name" value="${board.name}" placeholder="board name">
            <div class="bt-wrapper">
                <button> private </button>
                <button> public </button>
            </div>
            <textarea class="board-description">${board.description}</textarea>
            
            <div class="bt-wrapper">
                <button type="submit"> edit </button>
                <button type="button" class="delete"> delete </button>
                <button type="button" class="close"> close </button>
            </div>
            <p class="error"> &nbsp </p>
        </div>
    `

    /* MAIN */
    const root = document.createElement('div');
    root.className = 'board-edit-wrapper';
    Modal(root, innerHTML, () => {
        initEventListener();
    })
    root.classList.remove('hidden');
    return root;
}

export default BoardEditModal;