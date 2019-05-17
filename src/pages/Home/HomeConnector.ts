import { fetchFilmsIfNeeded } from 'features/films';
import { ISearchParamsState, params, sortBy } from 'features/searchParams';
import { connect } from 'react-redux';
import { AppState } from '../../configureStore';

export interface IHomePageStateProps {
    sortBy: string;
    isFilmsLoading: boolean;
}

export interface IHomePageDispatchProps {
    setSortBy: (id: string) => void;
    fetchFilmsIfNeeded: () => void;
    setParams: (data: ISearchParamsState) => void;
}

const mapStateToProps = ({
    searchParams,
    filmsInfo: { isFilmsLoading }
}: AppState): IHomePageStateProps => ({
    isFilmsLoading,
    sortBy: searchParams.sortBy
});

const mapDispatchToProps = (dispatch: any): IHomePageDispatchProps => ({
    setSortBy: id => dispatch(sortBy(id)),
    fetchFilmsIfNeeded: () => dispatch(fetchFilmsIfNeeded()),
    setParams: data => dispatch(params(data))
});

export const homeConnector = connect(
    mapStateToProps,
    mapDispatchToProps
);
