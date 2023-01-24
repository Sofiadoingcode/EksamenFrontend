
import settings from "../settings.js";

const URL = settings;


function handleHttpErrors(res) {
    if (!res.ok) {
        return Promise.reject({status: res.status, fullError: res.json()})
    }
    return res.json();
}

function apiFacade() {

    function makeOptions(method, addToken, body) {
        method = method ? method : 'GET';
        const opts = {
            method: method,
            headers: {
                ...(['PUT', 'POST'].includes(method) && {
                    "Content-type": "application/json"
                }),
                "Accept": "application/json"
            }
        }
        if (addToken && loggedIn()) {
            opts.headers["x-access-token"] = getToken();
        }
        if (body) {
            opts.body = JSON.stringify(body);
        }
        return opts;
    }

    const setToken = (token) => {
        localStorage.setItem('jwtToken', token)
    }

    const getToken = () => {
        return localStorage.getItem('jwtToken')
    }

    const loggedIn = () => {
        return getToken() != null;
    }

    const logout = () => {
        localStorage.removeItem("jwtToken");
    }

    const login = (user, password, setRoles, setLoggedIn, setUsername) => {
        const options = makeOptions("POST", true, {username: user, password: password});
        return fetch(URL + "/api/login", options)
            .then(handleHttpErrors)
            .then(res => {
                setToken(res.token);
                setRoles(res.roles);
                setLoggedIn(true);
                setUsername(user);
            })

    }

    function decodeJwt() {
        const token = getToken();
        if (!token) return undefined;
        const jwtData = token.split(".")[1];
        const decodedJwtJsonData = window.atob(jwtData);
        const decodedJwtData = JSON.parse(decodedJwtJsonData);
        return decodedJwtData;
    }

    const fetchData = () => {
        const options = makeOptions("GET", true);
        return fetch(URL + "/api/info/user", options).then(handleHttpErrors);
    }
    const fetchAdminData = () => {
        const options = makeOptions("GET", true);
        return fetch(URL + "/api/info/admin", options).then(handleHttpErrors);
    }

    const fetchJokes = () => {
        const options = makeOptions("GET", true);
        return fetch(URL + "/api/jokes", options).then(handleHttpErrors);
    }




    return {
        makeOptions,
        setToken,
        getToken,
        loggedIn,
        login,
        logout,
        fetchData,
        fetchAdminData,
        fetchJokes,
        decodeJwt
    }
}

const facade = apiFacade();
export default facade;
