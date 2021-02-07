
const ListsWrapper = ({lists}) => {

    /* render */
    const renderNotes = (notes) => {
        return notes.map(item => `<div class="note">
            <p> ${item.note} </p>
            <div class="f-r">
                <p> ${item.user} </p>
                <p> ${item.date} </p>
            </div>
        </div>`).join('');
    }
    const renderLists = () => {
        return Object.keys(lists).map(key=> `
            <div class="list">
                <p> ${key} </p>
                <div>
                    ${renderNotes(lists[key])}
                </div>
            </div>
        `).join('');
    }
    /* MAIN */
    const root = document.createElement('div');
    root.className = 'lists-wrapper';
    root.innerHTML = renderLists();
    
    return root;
}

export default ListsWrapper;