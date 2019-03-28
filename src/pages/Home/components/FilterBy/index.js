import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { ColorButton } from '../../../../components/ColorButton';
import { TransformText } from '../../../../components/TransformText';

export const FilterBy = ({
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

FilterBy.propTypes = {
    config: PropTypes.object.isRequired,
    options: PropTypes.array.isRequired,
    selectedOptionId: PropTypes.string.isRequired,
    onOptionChange: PropTypes.func.isRequired
};
