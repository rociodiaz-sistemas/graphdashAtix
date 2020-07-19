import { env } from "./environment";

export const api = {
    url: env.GRAPHDASH_API_URL,
    methods: {
        alarms: '/trips',
    },
};

export const httpMethods = {
    GET: 'get',
    POST: 'post',
    PUT: 'put',
    PATCH: 'patch',
    DELETE: 'delete'
  }