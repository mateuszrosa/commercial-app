import {useState} from 'react';
import styles from './Account.module.scss';
import { Redirect } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import {editUser} from '../../actions';
import { Button, Grid, Typography} from '@mui/material';
import {useForm,FormProvider} from 'react-hook-form';
import {FormInput} from '../../components/CheckoutForm/CustomTextField';

export const Account = () => {

  const dispatch = useDispatch();

  const {user} = useSelector(({ user }) => ({
    user
  }));
  const [isEdited, setIsEdited] = useState(false);

  const submit = (data) => {
    dispatch(editUser(data, user.login));
    setIsEdited(true);
  }

  const methods = useForm();

  if(isEdited) {
    return <Redirect to="/" />;
};

  return (
    <div className={styles.container}>
        <Typography variant="h6" gutterBottom>Edit account</Typography>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit((data) => submit(data))}>
          <Grid container spacing={3}>
            <FormInput name="firstName" label="First name" value={user.firstName}/>
            <FormInput name="lastName" label="Last name" value={user.lastName} />
            <FormInput name="address1" label="Address" value={user.address1} />
            <FormInput name="email" label="Email" value={user.email} />
            <FormInput name="City" label="City" value={user.city} />
            <FormInput name="zip" label="ZIP/Postal Code" value={user.zip} />
          </Grid>
          <br />
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <Button type="submit" variant="contained" color="primary">Save</Button>
          </div>
        </form>
      </FormProvider>
      </div>
  );
}
