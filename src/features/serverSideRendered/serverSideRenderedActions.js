import { createAction } from 'redux-actions';

export const serverSideRenderedFlag = createAction(
    'SERVER_SIDE_RENDERED_FLAG',
    flag => ({ flag })
);
