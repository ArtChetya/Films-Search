import Grid from '@material-ui/core/Grid';
import { ColorButton, TransformText } from 'components';
import React, { FunctionComponent } from 'react';
import { IFilterConfig, IOption } from '../../types';

interface IFilterByProps {
    config: IFilterConfig;
    options: IOption[];
    selectedOptionId: string;
    onOptionChange: (id: string) => void;
}

export const FilterBy: FunctionComponent<IFilterByProps> = ({
    config,
    options,
    selectedOptionId,
    onOptionChange
}) => {
    return (
        <Grid container alignItems="center" spacing={8}>
            <Grid item>
                <TransformText
                    fontcolor={config.defaultColor}
                    transform={config.titleTextTransform}
                    variant={config.titleVariant}
                >
                    {config.title}
                </TransformText>
            </Grid>

            {options.map(({ id, label }) => (
                <Grid key={id} item>
                    <ColorButton
                        onClick={() => onOptionChange(id)}
                        variant={config.buttonVariant}
                        backgroundcolor={
                            id === selectedOptionId
                                ? config.activeBgColor
                                : config.defaultBgColor
                        }
                    >
                        <TransformText
                            fontcolor={
                                id === selectedOptionId
                                    ? config.activeColor
                                    : config.defaultColor
                            }
                            transform={config.buttonTextTransform}
                            variant={config.titleVariant}
                        >
                            {label}
                        </TransformText>
                    </ColorButton>
                </Grid>
            ))}
        </Grid>
    );
};
