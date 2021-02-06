import { $ } from "../libs/util.js";

const usersBoards = {
    "test": ["p-101", "p-102"],
    "bmk": [],
    'pyan': []
}
let boardNextKey = 103;
const boardsDB = {
    "p-101": {
        'boardName': "web-study-kit",
        'description': "study together with kakapstudy together with kakapstudy together with kakapstudy together with kakap",
        'users': {'test': 'owner', 'bmk': 'edit', 'pyan':'read'},
        'state': 'private', // or 'public'
        'lastUpdate': new Date('2021').getTime(),
        'todo': [],
        'doing': [],
        'done': []
    },
    "p-102": {
        'boardName': "web-study-kit 2",
        'description': "study together with kakap",
        'users': {'test': 'owner', 'bmk': 'edit', 'pyan':'read'},
        'state': 'private', // or 'public'
        'lastUpdate': new Date('2021').getTime(),
        'todo': [],
        'doing': [],
        'done': []
    }
}
const userId = 'test' // 임시 유저 아이디
// board team 신청하기
// 권한 조정,, 요청 받기
const Home = () => {

    const getBoards = () => {
        return usersBoards[userId].map(item => boardsDB[item]);
    }
    /* render */
    const renderBoards = () => boards.map(item => {
        return `<div class="board f-r">
            <div class="f-c">
                <div class="f-r">
                    <p class="name"> ${item.boardName} </p>
                    <p class="state"> ${item.state} </p>
                </div>
                <p class="time"> ${new Date().getTime() - item.lastUpdate} </p>
            </div>
            <p style="flex: 2"> ${item.description} </p>
            <div class="bt-wrapper f-r">
                <button> eidt </button>
                <button> delete </button>
            </div>
        </div>`
    }).join('')
    
    const renderRoot = () =>  root.innerHTML = `
        <div class="header f-r">
            <p> user name </p>
            <button> logout </button>
        </div>

        <form class="search-wrapper">
            <tooltip> ⚑ </tooltip>
            <input>
            <button type="submit"> search </button>
            <button type="button" style="width: 170px"> see random board </button>
        </form>

        <div class="boards-wrapper f-c"> 
            <div class="setting bt-wrapper">
                <button> add project </button>
                <button> sort </button>
            </div>
            ${renderBoards()} 
        </div>
    `
    /* MAIN */
    const root = document.createElement('div');
    root.className = 'home-warpper f-c'
    const boards = getBoards();
    renderRoot();

    return root;
}

export default Home;