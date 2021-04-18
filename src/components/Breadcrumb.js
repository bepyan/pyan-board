function Breadcrumb ({ $app, initalState }){
    this.state = initalState;

    this.$target = document.createElement('nav');
    this.$target.className = 'Breadcrumb';
    $app.appendChild(this.$target);

    this.setState = nextState => {
        this.state = nextState;
        this.render();
    }
    this.render = () => {
        this.$target.innerHTML = `
            <div class="nav-item">root</div>
            ${this.state.map((node, idx) => `
                <div class="nav-item" data-index=${idx}>
                    ${node.name}
                </div>
            `).join('')}
        `
    }
}

export default Breadcrumb;