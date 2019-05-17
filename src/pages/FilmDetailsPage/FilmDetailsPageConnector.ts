import {
    clearFilmDetails,
    fetchFilmDetailsInfoIfNeeded,
    IFilmDetails
} from 'features/filmDetails';
import { ISearchParamsState, params } from 'features/searchParams';
import { connect } from 'react-redux';
import { AppState } from '../../configureStore';

export interface IFilmDetailsPageStateProps {
    isFilmDetailsLoading: boolean;
    filmDetails: IFilmDetails | null;
    isFilmsLoading: boolean;
    params: ISearchParamsState;
}

export interface IFilmDetailsPageDispatchProps {
    fetchFilmDetailsInfoIfNeeded: (filmId: number | string) => void;
    setParams: (data: ISearchParamsState) => void;
    clearFilmDetails: () => void;
}

const mapStateToProps = ({
    searchParams,
    filmDetailsInfo: { filmDetails, isFilmDetailsLoading },
    filmsInfo: { isFilmsLoading }
}: AppState): IFilmDetailsPageStateProps => ({
    isFilmDetailsLoading,
    filmDetails,
    isFilmsLoading,
    params: searchParams
});

const mapDispatchToProps = (dispatch: any): IFilmDetailsPageDispatchProps => ({
    fetchFilmDetailsInfoIfNeeded: filmId =>
        dispatch(fetchFilmDetailsInfoIfNeeded(filmId)),
    setParams: data => dispatch(params(data)),
    clearFilmDetails: () => dispatch(clearFilmDetails)
});

export const filmDetailsPageConnector = connect(
    mapStateToProps,
    mapDispatchToProps
);
