import axios from "axios";

export function getMyAlarms(payload) {
    let fakeUserId = payload;
    axios.get(`https://jsonplaceholder.typicode.com/rociodiaz-sistemas/graphdash/alarms`)
        .then(response => {
            return response;
        })
}

export function getMyWidgets(payload) {
    let response = axios.get(`http://my-json-server.typicode.com/rociodiaz-sistemas/graphdash/widgets/`);
    return response;
}