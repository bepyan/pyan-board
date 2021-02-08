const $ = (name, doc=document) => doc.querySelector(name);
const $$ = (name) => document.getElementById(name);
const $$$ = (name, doc=document) => doc.querySelectorAll(name);

const isInVailInput = (arr) => {
    const isBlank = arr.some(item => item.replace(/ /g, "")  === "")
    return isBlank
}

const getPassTime = (time) => {
    let tmp = new Date().getTime() - time;
    tmp = parseInt(tmp/1000);
    if(tmp < 60)
        return `🕓 Updated ${tmp} seconds ago`;
    tmp = parseInt(tmp/60);
    if(tmp < 60)
        return `🕓 Updated ${tmp} minutes ago`;
    tmp = parseInt(tmp/60);
    if(tmp < 24)
        return `🕓 Updated ${tmp} hours ago`;
    return `🕓 Updated ${parseInt(tmp/24)} days ago`;
}

const popSuccess = (work) => alert(`🥰 success to work "${work}"`);
const popFail = (work, err) => alert(`😭 fail to wrok "${wrok}"`, err);

export {$, $$, $$$, isInVailInput, getPassTime, popSuccess, popFail};