require('es6-promise').polyfill();
require('isomorphic-fetch');

const BASE_API = 'http://localhost:3000';
const BASE_URL = `${BASE_API}/api`;

// POST method
module.exports.postData = (url = ``, data = {}, token = null) => {
    let headers = {
        "Content-Type": "application/json; charset=utf-8",
        "Accept": "application/json"
    }

    if (token) headers.Authorization = `Token ${token}`;

    let myInit = {
        method: 'POST',
        withCredentials: true,
        headers: headers,
        credentials: "same-origin",
        mode: 'cors',
        cache: 'default',
        body: JSON.stringify(data)
    };

    let myRequest = new Request(BASE_URL + url, myInit);

    return fetch(myRequest)
        .then(response => response.json())
        .catch(error => console.error(`Fetch Error =\n`, error));
};

// PUT method
module.exports.putData = (url = ``, data = {}, token = null) => {
    let headers = {
        "Content-Type": "application/json; charset=utf-8",
        "Accept": "application/json"
    }

    if (token) headers.Authorization = `Token ${token}`;

    let myInit = {
        method: 'PUT',
        withCredentials: true,
        headers: headers,
        credentials: "same-origin",
        mode: 'cors',
        cache: 'default',
        body: JSON.stringify(data)
    };

    let myRequest = new Request(BASE_URL + url, myInit);

    return fetch(myRequest)
        .then(response => response.json())
        .catch(error => console.error(`Fetch Error =\n`, error));
};

// GET method
module.exports.getData = (url = ``, token = null) => {
    let headers = {
        "Content-Type": "application/json; charset=utf-8",
        "Accept": "application/json"
    }
    if (token) headers.Authorization = `Token ${token}`;

    let myInit = {
        method: 'GET',
        withCredentials: true,
        headers: headers,
        credentials: "same-origin",
        mode: 'cors',
        cache: 'default',
    };

    let myRequest = new Request(BASE_URL + url, myInit);

    return fetch(myRequest)
        .then(response => response.json())
        .catch(error => console.error(`Fetch Error =\n`, error));
};

module.exports.deleteData = (url = ``, data = {}, token = null) => {
    let headers = {
        "Content-Type": "application/json; charset=utf-8",
        "Accept": "application/json"
    }

    if (token) headers.Authorization = `Token ${token}`;

    let myInit = {
        method: 'DELETE',
        withCredentials: true,
        headers: headers,
        credentials: "same-origin",
        mode: 'cors',
        cache: 'default',
        body: JSON.stringify(data)
    };

    let myRequest = new Request(BASE_URL + url, myInit);

    return fetch(myRequest)
        .then(response => response.json())
        .catch(error => console.error(`Fetch Error =\n`, error));
};