import { TextField, Grid } from '@mui/material';
import { useFormContext, Controller } from 'react-hook-form';

export const FormInput = ({ name, label, type, value='' }) => {
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
                defaultValue={value}
                required
            />
        </Grid>
    );
}