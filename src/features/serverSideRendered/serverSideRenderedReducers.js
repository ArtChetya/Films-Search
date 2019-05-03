import { handleActions } from 'redux-actions';
import { serverSideRenderedFlag } from './serverSideRenderedActions';

const defaultServerSideRenderedFlagState = false;

export const serverSideRenderedFlagReducer = handleActions(
    {
        [serverSideRenderedFlag]: (state, { payload: { flag } }) => {
            return flag;
        }
    },
    defaultServerSideRenderedFlagState
);
