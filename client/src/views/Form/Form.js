import {useState} from 'react';
import styles from './Form.module.scss';

export const Form = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [country, setCountry] = useState('');
    const [shippingOption, setShippingOptions] = useState('');

    const submit = () => {
        console.log('send');
    }

    return ( 
        <div className={styles.formContainer}>
            <h1>Shipping address</h1>
            <form onSubmit={submit}>
                <label htmlFor="name">First name</label>
                <input type="text" name="name" id="name" />

                <label htmlFor="lastname">Last name</label>
                <input type="text" name="lastname" id="lastname" />

                <label htmlFor="address">Address</label>
                <input type="text" name="address" id="address" />

                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" />

                <label htmlFor="zipcode">ZIP/Postal code</label>
                <input type="text" name="zipcode" id="zipcode" />

                <label htmlFor="country">Shipping country</label>
                <input type="text" name="country" id="country" />

                <label htmlFor="shippingopt">Shipping options</label>
                <input type="text" name="shippingopt" id="shippingopt" />
            </form>
            <div className={styles.buttons}>
                <button>back to cart</button>
                <input type="submit" value="Next" />
            </div>
        </div>
     );
}