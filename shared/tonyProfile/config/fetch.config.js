export function fetchHeader(method, data={}) {
    let fetchJson = {
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, same-origin, *omit
        headers: {
            "X-Auth-Token":localStorage.getItem('access_token'),
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: `${method}`, // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, cors, *same-origin
        redirect: 'follow', // manual, *follow, error
        referrer: 'no-referrer', // *client, no-referrer
    }
    if(method.toLowerCase() !== 'get') {
        fetchJson.body = JSON.stringify(data); // must match 'Content-Type' header
    }
    return fetchJson;
}

/**
 * 共用 fetch
 * @param {*} url 
 * @param {*} method 
 */
export function* fetchFunc(url, method) {
    const data = yield fetch(`${url}`, fetchHeader(`${method}`))
        .then(response => response.json());
    return data;
}