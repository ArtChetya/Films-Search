import {
    SERVER_SIDE_RENDERED_FLAG,
    ServerSideRenderedActionTypes
} from './types';

export const serverSideRenderedFlag = (
    flag: boolean
): ServerSideRenderedActionTypes => {
    return {
        type: SERVER_SIDE_RENDERED_FLAG,
        payload: {
            flag
        }
    };
};
