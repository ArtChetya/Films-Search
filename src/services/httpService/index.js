import axios from 'axios';

const baseURL = 'http://react-cdp-api.herokuapp.com';

export const httpService = params => {
    console.log(params);
    // return Promise.resolve({data: { data: [] }, total: 3});
    return axios({
        ...params,
        baseURL
    });
};
