import { useRef } from 'react';
import styles from './Userpage.module.scss';

const Userpage = () => {

    const username = useRef(null);
    const password = useRef(null);

    const logIn = (e) => {
        e.preventDefault();
        console.log(username.current.value);
        console.log(password.current.value);
        username.current.value = "";
        password.current.value = "";
    }

    return ( 
        <div className={styles.userpage}>
            <div className={styles.container}>
            <form onSubmit={e => logIn(e)}>
                <label htmlFor="login">Login</label>
                <input type="text" ref={username} name="login" id="login" placeholder='Write your login'/>
                <label htmlFor="password">Password</label>
                <input type="password" ref={password} name="password" id="password" placeholder='Write your password'/>
                <input type="submit" value="log in" />
                <input type="button" value="register" />
            </form>
            </div>
        </div>
     );
}
 
export default Userpage;