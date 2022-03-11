import { TextField, Grid } from '@material-ui/core';
import { useFormContext, Controller } from 'react-hook-form';

export const FormInput = ({ name, label, type }) => {
    const { control } = useFormContext();
    return (
        <Grid item xs={12} sm={6}>
            <Controller
                as={TextField}
                type={type}
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