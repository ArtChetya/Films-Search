import {
    SERVER_SIDE_RENDERED_FLAG,
    ServerSideRenderedActionTypes
} from './types';

const defaultServerSideRenderedFlagState: boolean = false;

export const serverSideRenderedFlagReducer = (
    state = defaultServerSideRenderedFlagState,
    action: ServerSideRenderedActionTypes
): boolean => {
    switch (action.type) {
        case SERVER_SIDE_RENDERED_FLAG:
            return action.payload.flag;
        default:
            return state;
    }
};
