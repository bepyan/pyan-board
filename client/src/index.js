import load from "./router.js"

const url = window.sessionStorage.getItem('url');
// 임시방편..
const board = {
    'name': "web-study-kit",
    'description': "study together with kakapstudy together with kakapstudy together with kakapstudy together with kakap",
    'members': {'test': 'owner', 'bmk': 'edit', 'pyan':'read'},
    'state': 'private', // or 'public'
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
}


//load('board', {board})
load(url ? 'home' : 'login');