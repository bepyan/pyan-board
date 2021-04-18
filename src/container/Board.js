import BoardList from "../components/BoardList.js";

export default function Board({ $app, initialState }) {
    this.state = {
        boards: ["test1", "test2"]
    };
    this.setState = (nextState) => {
        this.state = nextState;
        boardList.setState({ boards: this.state.boards});
    }

    this.$target = document.createElement('div');
    this.$target.innerHTML = `
            <h1>Board List</h1>
        `
    const boardList = new BoardList({
        $app: this.$target,
        initialState: { boards: this.state.boards },
        onClick: () => {
            this.setState({
                ...this.state,
                boards: [...this.state.boards, "add test"]
            })
        }
    })
    $app.appendChild(this.$target);
}