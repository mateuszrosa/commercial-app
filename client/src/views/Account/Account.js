import {useState} from 'react';
import { Redirect } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import {editUser} from '../../actions';
import {Box, Tab, Button, Grid, Typography} from '@mui/material';
import {TabContext, TabList, TabPanel} from '@mui/lab';
import {useForm,FormProvider} from 'react-hook-form';
import {FormInput} from '../../components/CheckoutForm/CustomTextField';

export const Account = () => {

  const dispatch = useDispatch();

  const {user} = useSelector(({ user }) => ({
    user
  }));
  const [value, setValue] = useState('1');
  const [isEdited, setIsEdited] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  const submit = (data) => {
    dispatch(editUser(data, user.login));
    setIsEdited(true);
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
            <Tab label="Item Two" value="2" />
            <Tab label="Item Three" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
        <Typography variant="h6" gutterBottom></Typography>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit((data) => submit(data))}>
          <Grid container spacing={3}>
            <FormInput name="firstName" label="First name" value={user.firstName}/>
            <FormInput name="lastName" label="Last name" value={user.lastName} />
            <FormInput name="address1" label="Address" value={user.address1} />
            <FormInput name="email" label="Email" value={user.email} />
            <FormInput name="City" label="City" value={user.city} />
            <FormInput name="zip" label="ZIP/Postal Code" value={user.zip} />
            <FormInput name="country" label="Country" value={user.country} />
            <FormInput name="subdivision" label="Region" value={user.subdivision} />
          </Grid>
          <br />
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <Button type="submit" variant="contained" color="primary">Save</Button>
          </div>
        </form>
      </FormProvider>
        </TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
      </TabContext>
    </Box>
  );
}
