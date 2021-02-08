import Header from "../components/Header.js";
import BoardSearch from "../components/home/BoardSearch.js";
import BoardsWrapper from "../components/home/BoardsWrapper.js";

const usersBoards = {
    "test": ["p-101", "p-102"],
    "bmk": [],
    'pyan': []
}
let boardNextKey = 103;
const boardsDB = {
    "p-101": {
        'name': "web-study-kit",
        'state': 'private', // or 'public'
        'description': "study together with kakapstudy together with kakapstudy together with kakapstudy together with kakap",
        'members': {'test': 'owner', 'bmk': 'edit', 'pyan':'read'},
        'lastUpdate': new Date('2021').getTime(),
        'lists': {
            'To Do': [{
                'user': 'test', 
                'note': 'start test',
                'date': new Date().toLocaleDateString()
            }],
            'Doing': [],
            'Done': []
        }
    },
    "p-102": {
        'name': "web-study-kit 2",
        'description': "study together with kakap",
        'members': {'test': 'owner', 'bmk': 'edit', 'pyan':'read'},
        'state': 'private', // or 'public'
        'lastUpdate': new Date('2021').getTime(),
        'lists': {
            'todo': [],
            'doing': [],
            'done': []
        }
    }
}
const userId = 'test' // 임시 유저 아이디
// board team 신청하기
// 권한 조정,, 요청 받기


const Home = () => {

    const getBoards = () => {
        return usersBoards[userId].map(item => {
            const json = boardsDB[item];
            json['key'] = item;
            return json;
        });
    }

    /* MAIN */
    const boards = getBoards();

    const root = document.createElement('div');
    root.className = 'home-warpper f-c'
    root.appendChild(Header());
    root.appendChild(BoardSearch());
    root.appendChild(BoardsWrapper({boards}));

    return root;
}

export default Home;