import {useState} from 'react';
import {Order} from './Order/Order';
import { Redirect } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import {editUser, editUserPassword} from '../../actions';
import {Box, Tab, Button, Grid, Typography} from '@mui/material';
import {TabContext, TabList, TabPanel} from '@mui/lab';
import {useForm,FormProvider} from 'react-hook-form';
import {FormInput} from '../../components/CheckoutForm/CustomTextField';

export const Account = () => {

  const dispatch = useDispatch();

  const {user, error} = useSelector(({ user, error }) => ({
    user,
    error: error
  }));

  const [value, setValue] = useState('1');
  const [isEdited, setIsEdited] = useState(false);
  const [isValid, setIsValid] = useState(true);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const submit = (data) => {
    dispatch(editUser(data, user.login));
    setIsEdited(true);
  }

  const changePassword = (data) => {
    if(data.newPassword !== data.repeatPassword) {
      setIsValid(false)
      return;
    }
    dispatch(editUserPassword(data, user.login))
  }

  const methods = useForm();

  if(isEdited) {
    return <Redirect to="/" />;
};

  return (
<Box sx={{ width: '100%', typography: 'body1', marginTop: '90px' }}>
  <TabContext value={value}>
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Change address" value="1" />
            <Tab label="Change password" value="2" />
            <Tab label="Orders" value="3" />
          </TabList>
    </Box>
    <TabPanel value="1">
      <Typography variant="h6" gutterBottom>Change your address:</Typography>
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
    </TabPanel>
    <TabPanel value="2">
      <Typography variant="h6" gutterBottom>Change your password</Typography>
      {!isValid && <Typography color="error" variant="h7">Passwords are not the same</Typography>}
      {error && <Typography color="error" variant="h7">{error.message}</Typography>}
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit((data) => changePassword(data))} style={{marginTop: "15px"}}>
          <Grid container spacing={2}  flexDirection="column">
            <FormInput type="password" name="oldPassword" label="Old password" />
            <FormInput type="password" name="newPassword" label="New password" />
            <FormInput type="password" name="repeatPassword" label="Repeat new password" />
          </Grid>
          <br />
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <Button type="submit" variant="contained" color="primary">Save</Button>
          </div>
        </form>
      </FormProvider>
    </TabPanel>
    <TabPanel value="3">
      <Typography variant="h6" gutterBottom>Your orders:</Typography>
      <Grid container justifyContent="center" spacing={4}>
        {user.orders.map(item => ( 
            item.line_items.map(it => (
              <Grid container justifyContent="center" item key={it.id} xs={12} sm={6} md={3}>
                <Order product={it} key={it.id} />
              </Grid>
          ))
        ))}
      </Grid>
    </TabPanel>
  </TabContext>
</Box>
  );
}
