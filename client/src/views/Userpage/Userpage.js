import { useRef } from 'react';
import {InputLabel, MenuItem, Button, Grid, Typography} from '@material-ui/core';
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

    const username = useRef(null);
    const password = useRef(null);
    const email = useRef(null);

    const submit = (data) => {
        hasAccount ? 
            dispatch(login(username.current.value, password.current.value))
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

    const Register = () => (
        <>
            <label htmlFor="login">Login</label>
            <input type="text" ref={username} name="login" id="login" placeholder='Write your login'/>
            <label htmlFor="email">Email</label>
            <input type="email" ref={email} name="email" id="email" placeholder='Write your email' />
            <label htmlFor="password">Password</label>
            <input type="password" ref={password} name="password" id="password" placeholder='Write your password'/>
            <label htmlFor="address">Address</label>
            <input type="text" name="address" id="address" placeholder='Write your address' />
            <label htmlFor="city">City</label>
            <input type="text" name="city" id="city" placeholder='Write your city' />
            <label htmlFor="zip">ZIP/Postal Code</label>
            <input type="text" name="zip" id="zip" placeholder='Write you ZIP/Postal Code' />
            <label htmlFor="country">Country</label>
            <input type="text" name="country" id="country" placeholder='Write your country' />
            <label htmlFor="subdivision">Subdivision</label>
            <input type="text" name="subdivision" id="subdivision" placeholder='Write your region' />
            <input type="submit" value="register" />
            <Link to="/login">I have my account!</Link>
        </>
    );

    const Login = () => (
        <>
            <label htmlFor="login">Login</label>
            <input type="text" ref={username} name="login" id="login" placeholder='Write your login'/>
            <label htmlFor="password">Password</label>
            <input type="password" ref={password} name="password" id="password" placeholder='Write your password'/>
            <input type="submit" value="log in" />
            <Link to="/register">I want my account!</Link>
        </>
    )

    // onSubmit={methods.handleSubmit((data) => submit(data))}
    const Register1 = () => (
        <>
            <Typography variant="h6" gutterBottom></Typography>
            <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit((data) => submit(data))}>
                <Grid container spacing={3}>
                    <FormInput name="firstName" label="First name" />
                    <FormInput name="laststName" label="Last name" />
                    <FormInput name="address1" label="Address" />
                    <FormInput name="email" label="Email" />
                    <FormInput name="City" label="City" />
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
                {hasAccount ? <Login /> : <Register1 /> }
            </div>
        </div>
     );
}