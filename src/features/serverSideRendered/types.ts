export const SERVER_SIDE_RENDERED_FLAG = 'SERVER_SIDE_RENDERED_FLAG';

interface IServerSideRenderedFlagAction {
    type: typeof SERVER_SIDE_RENDERED_FLAG;
    payload: {
        flag: boolean;
    };
}

export type ServerSideRenderedActionTypes = IServerSideRenderedFlagAction;
