import { ButtonProps } from '@material-ui/core/Button';
import { TypographyProps } from '@material-ui/core/Typography';

export interface IFilterConfig {
    title: string;
    titleVariant: TypographyProps['variant'];
    activeColor: string;
    defaultColor: string;
    activeBgColor: string;
    defaultBgColor: string;
    titleTextTransform: string;
    buttonTextTransform: string;
    buttonVariant: ButtonProps['variant'];
}

export interface IOption {
    id: string;
    label: string;
}
