const $ = (name) => document.querySelector(name)
const $$ = (doc, name) => doc.querySelector(name)
const $$$ = (doc, name) => doc.querySelectorAll(name)

const isInVailInput = (arr) => {
    const isBlank = arr.some(item => item.replace(/ /g, "")  === "")
    return isBlank
}

export {$, $$, $$$, isInVailInput};