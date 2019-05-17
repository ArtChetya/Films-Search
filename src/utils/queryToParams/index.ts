export const queryToParams = (query: string): object => {
    if (query === 'undefined' || !query || !query.length) {
        return {};
    }

    return query.split(' ').reduce((paramsAccumulator, currentParam) => {
        const currentParamPair = currentParam.split('=');

        return {
            ...paramsAccumulator,
            [currentParamPair[0]]: currentParamPair[1]
        };
    }, {});
};
