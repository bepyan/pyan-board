function Nodes({$app, initialState}){
    this.state = initialState;

    console.log(initialState)
    this.$target = document.createElement('ul');
    $app.appendChild(this.$target);

    this.setState = (nextState) => {
        this.state = nextState;
        this.render();
    }

    // this.state 바탕으로 render
    this.render = () => {
        this.$target.innerHTML = this.state.nodes.map(node => {
            return `<li>${node.name}</li>`
        }).join('');
    }
    this.render();
}

export default Nodes;