import Modal from "../Modal.js";

const BoardAddModal = () => {

    /* usecase event */
    

    /* evnet listener*/
    const initEventListener = () => {
        root.addEventListener('click', e => {
            switch(e.target.className){
                
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
            
            <input class="board-name" placeholder="board name">
            <div class="bt-wrapper">
                <button> private </button>
                <button> public </button>
            </div>
            <textarea class="board-description"></textarea>
            
            <div class="bt-wrapper">
                <button type="submit"> add </button>
                <button type="button" class="close"> close </button>
            </div>
            <p class="error"> &nbsp </p>
        </div>
    `

    /* MAIN */
    const root = document.createElement('div');
    root.className = 'board-add-wrapper';
    Modal(root, innerHTML, () => {
        initEventListener();
    })
    return root;
}

export default BoardAddModal;