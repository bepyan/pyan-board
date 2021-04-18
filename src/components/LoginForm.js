function LoginForm({ $root, initialState }) {
    this.state = initialState;

    this.$target = document.createElement('div');
    $root.appendChild(this.$target);

    this.setState = (nextState) => {
        this.state = nextState;
        render();
    }

    const render = () => {
        this.$target.innerHTML = `
            <form>
                <input class="id" placeholder="ID">
                <input class="pw" type="password" placeholder="pw" autocomplete>
                <button type="submit"> log in </button>
                <button type="button" class="signup-bt"> sign up </button>
            </form>
            <p class="error" style="margin-top: 1rem;">error</p>
        `
    }
    render();
}

export default LoginForm;