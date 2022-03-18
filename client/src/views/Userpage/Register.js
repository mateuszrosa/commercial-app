import {Button, Grid, Typography} from '@mui/material';
import {useForm,FormProvider} from 'react-hook-form';
import { Link, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import {register} from '../../actions';
import styles from './Userpage.module.scss';
import {FormInput} from '../../components/CheckoutForm/CustomTextField';

export const Register = () => {

    const dispatch = useDispatch();
    const methods = useForm();

    const { userId} = useSelector(({ user }) => ({
      userId: user.userId
    }));

    const submit = (data) => {
        dispatch(register(data));
    }

    if(userId) {
        return <Redirect to="/" />;
    };

    return ( 
        <div className={styles.userpage}>
            <div className={styles.container}>
            <Typography variant="h3" gutterBottom>Register</Typography>
            <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit((data) => submit(data))}>
                <Grid container justifyContent='space-around' spacing={3}>
                    <FormInput name="login" label="Login" />
                    <FormInput name="password" label="Password" type="password" />
                    <FormInput name="firstName" label="First name" />
                    <FormInput name="lastName" label="Last name" />
                    <FormInput name="address1" label="Address" />
                    <FormInput name="email" label="Email" />
                    <FormInput name="city" label="City" />
                    <FormInput name="zip" label="ZIP/Postal Code" />
                    <FormInput name="country" label="Country" />
                    <FormInput name="subdivision" label="Region" />
                    <Button type="submit" variant="contained" color="primary">Register</Button><Button type="submit" variant="contained" color="secondary">
                        <Link to="login">I have my account</Link>    
                    </Button>
                </Grid>
            </form>
            </FormProvider>
            </div>
        </div>
     );
}