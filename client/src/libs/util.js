const $ = (name, doc=document) => doc.querySelector(name);
const $$ = (name) => document.getElementById(name);
const $$$ = (name, doc=document) => doc.querySelectorAll(name);

const renderToggle = (root, targetClassName) => {
    $$$('.toggle', root).forEach(item => item.classList.remove('toggle'));
    const target = $(`.${targetClassName}`, root);
    target.classList.add('toggle');
}
const openModal = (className) => {
    $(`.${className}`).classList.remove('hidden');
}
const closeModal = (className) => {
    $(`.${className}`).classList.add('hidden');
}

const isInVailInput = (arr) => {
    const isBlank = arr.some(item => item.replace(/ /g, "")  === "")
    return isBlank
}
const isJsonString = (str) => {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

const renderError = (root, str=`😢 Invaild Input`) => {
    const $error = $('.error', root);
    if($error)
        $error.innerHTML = str;
    else
        console.err('no ".error" documnet')
}

const getPassTime = (date) => {
    const time = new Date(date).getTime();
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
const popFail = (work, err='') => {
    console.error(err);
    alert(`😭 fail to work "${work}" \n`);
};

export {$, $$, $$$, renderToggle, openModal, closeModal, isInVailInput, renderError, getPassTime, popSuccess, popFail, isJsonString};