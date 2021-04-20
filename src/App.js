import Cursor from "./components/Cursor.js";
import EyeTrackingHeader from "./components/EyeTrackingHeader.js"
import Board from "./container/Board.js"
import Login from "./container/Login.js"

function App($app) {
    this.state = {

    }
    /* Render Children */
    const Header = new EyeTrackingHeader({ $app });

    // new Board({ $app })


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