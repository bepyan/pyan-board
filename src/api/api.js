const API_END_POINT = 'http://example.com/movies.json';

const requset = (nodeId) => {
    fetch(`${API_END_POINT}/${nodeId ? nodeId : ''}`)
        .then(res => {
            if(!res.ok)
                throw new Error('http 오류');

            return res.json();
        })
        .then(json => {
            console.log(JSON.stringify(json));
        })
        .catch(e => {
            alert(e.message);
        })
}

const requsetAwait = (nodeId) => {
    try{
        const res = await fetch(`${API_END_POINT}/${nodeId ? nodeId : ""}`)
        if(!res.ok)
            throw new Error('서버의 상태가 이상합니다!')
        
    } catch(e) {
        throw new Error(`무언가 잘못 되었습니다.. ${e.message}`)
    }
} 