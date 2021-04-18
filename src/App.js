import { db } from "./api/mock.js";
import Login from "./container/Login.js";

function App($app) {
    this.state = {
        
    }
    /* Render Children*/
    new Login({ $app, initialState: this.state })

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