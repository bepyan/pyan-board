import { db } from "./api/mock.js";
import Breadcrumb from "./components/Breadcrumb.js";
import Nodes from "./components/Nodes.js";

function App($app) {
    this.state = {
        isRoot: false,
        nodes: db,
        depth: []
    }
    const breadcrumb = new Breadcrumb({
        $app,
        initalState: this.state.depth
    })
    const nodes = new Nodes({
        $app,
        initialState: {
            isRoot: this.state.isRoot,
            nodes: this.state.nodes
        }
    })

    // const init = async = () => {
    //     try{
    //         const rootNodes = await reqest();
    //         this.setState({
    //             ...this.state,
    //             isRoot: true,
    //             nodes: rootNodes
    //         })
    //     } catch(e) {
    //         // 에러 처리하기
    //     }
    // }
    // init();
}

export default App