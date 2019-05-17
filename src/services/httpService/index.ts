import axios from 'axios';
import { ISearchParamsState } from 'features/searchParams';

const baseURL = 'http://react-cdp-api.herokuapp.com';

export const httpService = (params: ISearchParamsState | {}) => {
    return axios({
        ...params,
        baseURL
    });
};
