import axios from "axios";

export function getMyAlarms(payload) {
    let fakeUserId = payload;
    let response = axios.get(`https://5f23176a0e9f660016d88cc3.mockapi.io/api/graphdash/alarms`)
    return response;
}

export function getMyWidgets(payload) {
    let response = axios.get(`https://5f23176a0e9f660016d88cc3.mockapi.io/api/graphdash/widgets`);
    console.log(response);
    return response
}

export function getAlarms(payload) {
    let response = axios.get(`https://5f23176a0e9f660016d88cc3.mockapi.io/api/graphdash/alarms`);
    console.log(response);
    return response
}

export function updateAlarms(payload) {
    //update random alarm 
    let randomBoolean = Math.round(Math.random() * 1) ? true : false;
    let response = axios.put(`https://5f23176a0e9f660016d88cc3.mockapi.io/api/graphdash/alarms/${[1, 2].sort(function () {
        return .3 - Math.random();
    })}`, {status: randomBoolean});
    console.log(response);
    return response
}

export function createMyWidget(payload) {
    //the fake api service I'm using does not have patch.
    let response = axios.put(`https://5f23176a0e9f660016d88cc3.mockapi.io/api/graphdash/widgets/${payload.id}`, { activated: true });
    return response;
}