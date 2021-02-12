import { $ } from "./util.js";

const renderMembers = (note) => {
    return note.members.map(item => `
        <p> ${item} </p>
    `).join('');
}
const renderNotes = (notes) => {
    return `
        <div class="notes-wrapper">
            ${notes.map(item => `
                <div class="note">
                    <h1> ${item.note} </h1>
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
            <p class="list-name"> ${item.name} </p>
            ${renderNotes(item.notes)}
            <button class="add-note ${idx}"> + </button>
        </div>
    `).join('');
}
export {renderLists};