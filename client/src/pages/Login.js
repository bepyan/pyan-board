import LoginFrom from "../components/login/LoginFrom.js";
import SignupModal from "../components/login/SignupModal.js";


const Login = () => {
    const renderTitle = () => `<p class="title"> pyan-board </p>`
    /* MAIN */
    const root = document.createElement('div');
    root.className = 'login-wrapper f-c'
    root.innerHTML = renderTitle();
    root.appendChild(LoginFrom())
    root.appendChild(SignupModal());
    return root;
}

export default Login;