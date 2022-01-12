import styles from './Userpage.module.scss';

const Userpage = () => {
    return ( 
        <div className={styles.userpage}>
            <div className={styles.container}>
            <h2>log in</h2>
            <form action="">
                <label htmlFor="login">Login</label>
                <input type="text" name="login" id="login" placeholder='Write your login'/>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" placeholder='Write your password'/>
                <input type="submit" value="log in" />
                <input type="button" value="register" />
            </form>
            </div>
        </div>
     );
}
 
export default Userpage;