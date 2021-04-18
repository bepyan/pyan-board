import LoginForm from "../components/LoginForm.js";

function Login({ $app, initialState }) {
    this.state = initialState;

    this.$target = document.createElement('div');
    $app.appendChild(this.$target);

    this.setState = (nextState) => {
        this.state = nextState;
        this.render();
    }

    // this.state 바탕으로 render
    this.render = () => {

        this.$target.innerHTML = `

        `
        const loginForm = new LoginForm({ $root: this.$target, initialState });
    }
    this.render();
}

export default Login;