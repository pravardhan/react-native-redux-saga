const baseUrl = 'https://api.github.com';

const api = {
    getUserInfo: `${baseUrl}/users/:username`
};

const getApiUrl = (apiName, parameters={})=>{
    let url;
    Object.keys(parameters).forEach((key)=> {
        url = apiName.replace(`:${key}`, parameters[key]);
    });
    return url;
};

const getData = async (api, parameters)=> {
    const url = getApiUrl(api, parameters);
    return new Promise((resolve, reject)=> {
        return fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'applicaton/json'
            }
        }).then((response)=> {
            response.json().then((json)=>{
                resolve(json);
            })
            //resolve(JSON.parse(response.__bodyText));
            return;
        })
    });
};

export {
    api,
    getData
};