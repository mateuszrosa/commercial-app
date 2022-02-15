import { TextField, Grid } from '@material-ui/core';
import { useFormContext, Controller } from 'react-hook-form';

export const FormInput = ({ name, label }) => {
    const { control } = useFormContext();
    return (
        <Grid item xs={12} sm={6}>
            <Controller
                as={TextField}
                name={name}
                control={control}
                label={label}
                fullWidth
                defaultValue=""
                required
            />
        </Grid>
    );
}