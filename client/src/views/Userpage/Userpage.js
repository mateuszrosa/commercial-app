import { useRef } from 'react';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import {login} from '../../actions';
import styles from './Userpage.module.scss';

const Userpage = ({hasAccount}) => {

    const dispatch = useDispatch();
    const username = useRef(null);
    const password = useRef(null);
    const email = useRef(null);

    const logIn = (e) => {
        e.preventDefault();
        dispatch(login(username.current.value, password.current.value))
        username.current.value = "";
        password.current.value = "";
    }

    return ( 
        <div className={styles.userpage}>
            <div className={styles.container}>
            <form onSubmit={e => logIn(e)}>
                <label htmlFor="login">Login</label>
                <input type="text" ref={username} name="login" id="login" placeholder='Write your login'/>
                {!hasAccount && 
                <>
                    <label htmlFor="email">Email</label>
                    <input type="email" ref={email} name="email" id="email" placeholder='Write your email' />
                </>

                }
                <label htmlFor="password">Password</label>
                <input type="password" ref={password} name="password" id="password" placeholder='Write your password'/>
                {hasAccount ? 
                    <>
                        <input type="submit" value="log in" />
                        <Link to="/register">I want my account!</Link>
                    </>
                    :
                    <>
                        <input type="submit" value="register" />
                        <Link to="/login">I have my account!</Link>
                    </>

                }
            </form>
            </div>
        </div>
     );
}
 
export default Userpage;