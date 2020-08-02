import { env } from "./environment";

export const api = {
    url: env.GRAPHDASH_API_URL,
    methods: {
        alarms: '/trips',
    },
};

export const WIDGET_OPTIONS = [
    { key: 1, text: 'Alarms', value: 'alarms' }
]

export const httpMethods = {
    GET: 'get',
    POST: 'post',
    PUT: 'put',
    PATCH: 'patch',
    DELETE: 'delete'
}