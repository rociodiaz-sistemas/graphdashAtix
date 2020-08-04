import axios from "axios";

export function getMyAlarms(payload) {
    debugger;
    let response = axios.get(`https://5f23176a0e9f660016d88cc3.mockapi.io/api/graphdash/alarms`)
    return response;
}

export function getMyWidgets(payload) {
    let response = axios.get(`https://5f23176a0e9f660016d88cc3.mockapi.io/api/graphdash/widgets`);
    console.log(response);
    return response
}

export function editMyAlarm(payload) {
    let response = axios.put(`https://5f23176a0e9f660016d88cc3.mockapi.io/api/graphdash/alarms/${payload.id}`, payload.alarm);
    return response;
}

export function createMyAlarm(payload) {
    debugger;
    let response = axios.post(`https://5f23176a0e9f660016d88cc3.mockapi.io/api/graphdash/alarms/`, payload);
    return response;
}

export function deleteMyAlarm(payload) {
    let response = axios.delete(`https://5f23176a0e9f660016d88cc3.mockapi.io/api/graphdash/alarms/${payload.id}`);
    return response;
}

export function createMyWidget(payload) {
    //the fake api service I'm using does not have patch.
    let response = axios.put(`https://5f23176a0e9f660016d88cc3.mockapi.io/api/graphdash/widgets/${payload.id}`, { activated: true });
    return response;
}

export function pauseMyAlarm(payload) {
    //turning off notifications manually on pause simulating a backend change
    let response = axios.put(`https://5f23176a0e9f660016d88cc3.mockapi.io/api/graphdash/alarms/${payload.id}`, { paused: payload.isPaused, status: false});
    return response;
}