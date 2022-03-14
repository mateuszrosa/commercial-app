import {Button, Grid, Typography} from '@material-ui/core';
import {useForm,FormProvider} from 'react-hook-form';
import { Link, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import {login, register} from '../../actions';
import styles from './Userpage.module.scss';
import {FormInput} from '../../components/CheckoutForm/CustomTextField';

export const Login = ({hasAccount}) => {

    console.log('render')

    const dispatch = useDispatch();
    const methods = useForm();

    const { userId} = useSelector(({ user }) => ({
      userId: user.userId
    }));

    const submit = (data) => {
        console.log(data);
        hasAccount ? 
            dispatch(login(data))
            :
            dispatch(register(data));
    }

    if(userId) {
        return <Redirect to="/" />;
    };

    return ( 
        <div className={styles.userpage}>
            <div className={styles.container}>
            <Typography variant="h6" gutterBottom>Log In</Typography>
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit((data) => submit(data))}>
                    <Grid container justifyContent='space-around' spacing={2}>
                        <FormInput name="login" label="Login" />
                        <FormInput name="password" label="Password" type="password" />
                        <Button type="submit" variant="contained" color="primary">Log In</Button>
                        <Button type="submit" variant="contained" color="secondary">
                            <Link to="register">I want my account</Link>    
                        </Button>
                    </Grid>
                </form>
            </FormProvider>
            </div>
        </div>
     );
}