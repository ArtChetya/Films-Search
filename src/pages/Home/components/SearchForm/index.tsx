import pink from '@material-ui/core/colors/pink';
import Grid from '@material-ui/core/Grid';
import TextField, { TextFieldProps } from '@material-ui/core/TextField';
import { ColorButton, TransformText } from 'components';
import React, {
    ComponentType,
    FunctionComponent,
    SyntheticEvent,
    useEffect,
    useState
} from 'react';
import styledComponents from 'styled-components';
import { SearchBy } from '..';
import { IOption } from '../../types';

const SearchField = styledComponents(TextField)<TextFieldProps>`
    && {
        margin: 8px 0;

        div:after {
            border-bottom: 2px solid ${pink[400]};
        }

        & input {
            color: #fff;
        }
    }
` as ComponentType<TextFieldProps>;

interface ISearchFormProps {
    search: string;
    searchBy: string;
    onSearch: (searchField: string, searchById: string) => void;
}

export const SearchForm: FunctionComponent<ISearchFormProps> = ({
    search,
    searchBy,
    onSearch
}) => {
    const [searchField, setSearchField] = useState<string>(search);

    const searchByOptionsList: IOption[] = [
        { id: 'title', label: 'Title' },
        { id: 'genres', label: 'Genre' }
    ];
    const [searchByOptions] = useState<IOption[]>(searchByOptionsList);
    const [searchById, setSearchById] = useState<string>(searchBy);

    const onSubmit = (event: SyntheticEvent) => {
        event.preventDefault();
        onSearch(searchField, searchById);
    };

    useEffect(() => {
        setSearchField(search);
        setSearchById(searchBy);
    }, [search, searchBy]);

    return (
        <form onSubmit={onSubmit}>
            <Grid container justify="space-between" alignItems="center">
                <Grid item xs={12}>
                    <TransformText transform="uppercase" variant="h6">
                        find your movie
                    </TransformText>
                </Grid>

                <Grid item xs={12}>
                    <SearchField
                        value={searchField}
                        onChange={e => setSearchField(e.target.value)}
                        fullWidth
                        margin="dense"
                        variant="filled"
                    />
                </Grid>

                <Grid item xs={5}>
                    <SearchBy
                        options={searchByOptions}
                        selectedOptionId={searchById}
                        onOptionChange={setSearchById}
                    />
                </Grid>

                <Grid item>
                    <ColorButton
                        fontcolor="#fff"
                        backgroundcolor={pink[400]}
                        type="submit"
                        size="large"
                    >
                        Search
                    </ColorButton>
                </Grid>
            </Grid>
        </form>
    );
};
