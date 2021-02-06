const $ = (name, doc=document) => doc.querySelector(name);
const $$ = (name) => document.getElementById(name);
const $$$ = (name, doc=document) => doc.querySelectorAll(name);

const isInVailInput = (arr) => {
    const isBlank = arr.some(item => item.replace(/ /g, "")  === "")
    return isBlank
}

export {$, $$, $$$, isInVailInput};