
export function createConfig(token, method, path, body, additionalHeaders = undefined) {
    let headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
    };

    if (additionalHeaders) {
        headers = {
            ...headers,
            ...additionalHeaders
        }
    }

    var config = {
        method: method,
        url: path,
        headers: headers,
    };

    if (method === 'get') {
        Object.assign(config, {
            params: body,
        })
    }
    else {
        Object.assign(config, {
            data: body,
        })
    }

    return config;
}