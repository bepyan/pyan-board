const fs = require('fs');

/* get current date string */
const makeTwoDigit = (n) =>  {
    const str = String(n);
    return str.length < 2 ? '0'+str : str;
}
const getCurrentDate = () => {
    const D = new Date();
    const year = D.getFullYear();
    const month = makeTwoDigit(D.getMonth()+1);
    const date = makeTwoDigit(D.getDate());
    return `${year}.${month}.${date}`
}

/* plan status table */
const StatusTable = {
    todo: 0,
    doing: 1,
    done: 2
};

const Fname = {
    users: "users.json",
    plans: "plans.json"
}

/* LOAD DATA */
const loadData = (fileName, afterFunc) => {
    fs.readFile(__dirname + `/../data/${fileName}`, 'utf-8', (err, data) => {
        if(err)
            console.log(err)
        const json = JSON.parse(data)
        afterFunc(json);
    });
}

/* SAVE DATA */
const saveData = (fileName, newData, afterFunc=()=>{}) => {
    fs.writeFile(__dirname + `/../data/${fileName}`, JSON.stringify(newData, null, '\t'), "utf8", (err, data) => {
        if(err)
            console.log(err)
        afterFunc();
    })
}

/* CHECK REQ VALIDITY */
// 취약점: 숫자 0이 들어올 경우!! []의 index of 0을 찾을 경우!!
const isInVailReq = (arr, res) => {
    const json = {};
    const result = arr.some(item => item!== 0 && !item);
    if(result){
        json['success'] = false;
        json['err'] = '😢 Invalid Request';
        res.json(json);
    }
    return result;
}
module.exports = {getCurrentDate, StatusTable, Fname, loadData, saveData, isInVailReq}