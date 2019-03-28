import axios from 'axios';

const baseURL = 'http://react-cdp-api.herokuapp.com';

export const httpService = params => {
    return axios({
        ...params,
        baseURL
    });
};
