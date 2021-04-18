export default function BoardList({ $app, initialState, onClick }) {
    this.state = initialState;
    this.setState = (nextState) => {
        this.state = nextState;
        render();
    }

    this.$target = document.createElement('div');
    this.$target.addEventListener('click', e => {
        switch(e.target.className){
            case 'add':
                return onClick();
            default:
                console.log(e.target.className)
        }
    })

    const render = () => {
        this.$target.innerHTML = `
            ${this.state.boards.map(item =>
                `<h3>${item}</h3>`
            ).join('')}
            <button class="add">add</button>
        `
    }
    render();
    $app.appendChild(this.$target);
}