import {Button, Grid, Typography} from '@material-ui/core';
import {useForm,FormProvider} from 'react-hook-form';
import { Link, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import {login, register} from '../../actions';
import styles from './Userpage.module.scss';
import {FormInput} from '../../components/CheckoutForm/CustomTextField';

export const Userpage = ({hasAccount}) => {

    const dispatch = useDispatch();
    const methods = useForm();

    const { userId} = useSelector(({ user }) => ({
      userId: user.userId
    }));

    const submit = (data) => {
        hasAccount ? 
            dispatch(login(data))
            :
            dispatch(register(data));
            // if(hasAccount) {
            //     username.current.value = "";
            //     password.current.value = "";
            // } else {
            //     username.current.value = "";
            //     password.current.value = "";
            //     email.current.value = ""
            // }
    }

    if(userId) {
        return <Redirect to="/" />;
    };

    const Login = () => (
        <>
            <Typography variant="h6" gutterBottom></Typography>
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit((data) => submit(data))}>
                    <Grid container spacing={3}>
                        <FormInput name="login" label="Login" />
                        <FormInput name="password" label="Password" />
                        <Button type="submit" variant="contained" color="primary">Login</Button>
                    </Grid>
                </form>
            </FormProvider>
        </>
    )

    const Register = () => (
        <>
            <Typography variant="h6" gutterBottom></Typography>
            <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit((data) => submit(data))}>
                <Grid container spacing={3}>
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
                    <Button type="submit" variant="contained" color="primary">Register</Button>
                </Grid>
            </form>
            </FormProvider>
        </>
    );

    return ( 
        <div className={styles.userpage}>
            <div className={styles.container}>
                {hasAccount ? <Login /> : <Register /> }
            </div>
        </div>
     );
}