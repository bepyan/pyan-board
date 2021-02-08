const $ = (name, doc=document) => doc.querySelector(name);
const $$ = (name) => document.getElementById(name);
const $$$ = (name, doc=document) => doc.querySelectorAll(name);

const isInVailInput = (arr) => {
    const isBlank = arr.some(item => item.replace(/ /g, "")  === "")
    return isBlank
}

const popSuccess = (work) => alert(`🥰 success to work "${work}"`);
const popFail = (work, err) => alert(`😭 fail to wrok "${wrok}"`, err);

export {$, $$, $$$, isInVailInput, popSuccess, popFail};