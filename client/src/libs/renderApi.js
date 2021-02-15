import { getStorage } from "./storage.js";
import { $, getPassTime } from "./util.js";

/* render board thums */
const getAction = (members, id) => {
    const user = members.find(e => e.id === id);
    if(!user)
        return 'join'
    switch(user.auth){
        case 'owner': 
            return 'edit';
        case 'edit': case 'read':
            return '😎'
    }
    return 'wait'
}
const renderBoardsThum = (boards, root=document) => {
    const {id} = getStorage('user');

    const $wrapper = $('.boards-thum-wrapper', root);
    $wrapper.innerHTML = boards.map(item => {
        let action = getAction(item.members, id);

        return `<div class="board f-r" id="${item._id}">
            <div class="f-c">
                <div class="f">
                    <p class="name"> ${item.name} </p>
                    <p class="state"> ${item.state} </p>
                </div>
                <p class="time"> ${getPassTime(item.lastUpdate)} </p>
            </div>
            <p style="flex: 1.5"> ${item.description} </p>
            <div class="bt-wrapper f-r">
                <button class="${action}"> ${action} </button>
            </div>
        </div>`
    }).join('');
}


/* render board lists */
const renderMembers = (note) => {
    return note.members.map(item => `
        <p> ${item} </p>
    `).join('');
}
const renderNotes = (notes) => {
    return `
        <div class="notes-wrapper">
            ${notes.map(item => `
                <div class="note" id="${item._id}">
                    <h1 class="edit-note"> ${item.text} </h1>
                    <div class="f-r">
                        ${renderMembers(item)}
                    </div>
                </div>`
            ).join('')}
        </div>
    `
}
const renderLists = (lists, root=document) => {
    const $lists = $('.lists-wrapper', root);
    $lists.innerHTML = lists.map((item, idx) => `
        <div class="list" id="${item._id}">
            <p class="edit-list"> ${item.name} </p>
            ${renderNotes(item.notes)}
            <button class="add-note"> + </button>
        </div>
    `).join('');
}
export {renderBoardsThum, renderLists};